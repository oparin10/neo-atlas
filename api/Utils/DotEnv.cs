using System.Text;

namespace Api.Utils;

public static class DotEnv
{


    public static void Load(string path)
    {
        Parse(path, (key, value) =>
        {
            Environment.SetEnvironmentVariable(key, value);
        });
    }

    public static IDictionary<string, string> Read(string path)
    {
        var env = new Dictionary<string, string>();

        Parse(path, (key, value) =>
        {
            env[key] = value;
        });

        return env;
    }

    private static void Parse(string path, Action<string, string> callback)
    {
        if (!File.Exists(path))
        {
            throw new FileNotFoundException("");
        }

        foreach (var line in File.ReadAllLines(path, Encoding.UTF8))
        {

            var parts = line.Split('=', 2, StringSplitOptions.TrimEntries);

            if (parts.Length != 2)
            {
                continue;
            }

            callback(parts[0].Replace("\"", ""), parts[1].Replace("\"", ""));

        }
    }
}
