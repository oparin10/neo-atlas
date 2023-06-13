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
            var splitted = line.Split('=', StringSplitOptions.RemoveEmptyEntries);

            if (splitted.Length == 2)
            {
                result.Add(splitted[0], splitted[1]);
            }
        }

        return result;

    }
}
