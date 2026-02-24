Set shell = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")

basePath = fso.GetParentFolderName(WScript.ScriptFullName)
launcher = Chr(34) & basePath & "\iniciar-teste-jogo.bat" & Chr(34)

' 0 = hidden window, False = do not wait
shell.Run "cmd /c " & launcher, 0, False
