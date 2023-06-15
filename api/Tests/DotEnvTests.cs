
using System.Text;
using Api.Utils;
using NUnit.Framework;

namespace Api.Tests;

[TestFixture]
public class DotEnvTests
{

    [Test]
    public void ParsesEnvFile_ReturnsDictionary()
    {
        var env = DotEnv.Load(CreateTestEnvFile());

        Assert.IsInstanceOf<IDictionary<string, string>>(env);
    }

    // throws file not found exception

    [Test]
    public void ParsesEnvFile_ThrowsFileNotFoundException()
    {
        Assert.Throws<FileNotFoundException>(() => DotEnv.Load("non-existent-file.env"));
    }



    private static string CreateTestEnvFile()
    {
        var tempFilePath = Path.GetTempFileName();

        var content = new StringBuilder();

        content.AppendLine("DB_CONNECTION_STRING=\"Server=localhost;Database=contacts;Uid=root;Pwd=;\"");
        content.AppendLine("OTHER_KEY=\"other value\"");

        File.WriteAllText(tempFilePath, content.ToString());


        return tempFilePath;

    }
}