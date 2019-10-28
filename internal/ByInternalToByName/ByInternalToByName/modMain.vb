' Project takes in the repo's "ByInternal.json" file and will output the file "ByName.json"

Imports Newtonsoft.Json

Module modMain
    Private ofd As New OpenFileDialog

    Sub Main()
        ' Initialize UI components
        UIInit()

        ' Determine File
        Dim FileTarget As String = ""
        Dim CLA() As String = Environment.GetCommandLineArgs()

        ' If we have more than one ARG, assume file is via CLE
        If CLA.Length > 1 Then
            FileTarget = CLA(1) ' First spot should be file
        Else ' Else go Open File Dialog route
            Dim ret As DialogResult = ofd.ShowDialog()
            If ret = DialogResult.Cancel Then
                End ' Abort application
            End If
            FileTarget = ofd.FileName
        End If

        ' Verify File Exists
        If Not System.IO.File.Exists(FileTarget) Then
            End ' Abort application
        End If

        ' Read File

        ' Parse


        ' Output
    End Sub

    Private Sub UIInit()
        ofd.FileName = ""
        ofd.DefaultExt = ".json"
        ofd.Filter = "JSON|*.json"
        ofd.Multiselect = False
        ofd.RestoreDirectory = True
    End Sub

End Module
