namespace Api.Utils;

public static class DotEnv
{

    public static IDictionary<string, string> Load(string path)
    {

        var result = new Dictionary<string, string>();

        if (!File.Exists(path))
        {
            throw new FileNotFoundException("");
        }

        foreach (var line in File.ReadAllLines(path))
        {

            var parts = line.Split('=', 2, StringSplitOptions.TrimEntries);

            if (parts.Length != 2)
            {
                continue;
            }

            result[parts[0]] = parts[1];

        }

        return result;

    }
}
