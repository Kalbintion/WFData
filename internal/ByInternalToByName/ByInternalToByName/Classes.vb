Imports Newtonsoft.Json

Public Class ByInternal
    <JsonProperty("Name")>
    Public Property Name As String

    <JsonProperty("Type")>
    Public Property Type As String

    <JsonProperty("Subtype")>
    Public Property Subtype As String
End Class

Public Class Pagination
    <JsonProperty("effective_limit")>
    Public Property EffectiveLimit() As Integer?

    <JsonProperty("effective_offset")>
    Public Property EffectiveOffset() As Integer?

    <JsonProperty("effective_page")>
    Public Property EffectivePage() As Integer?

    <JsonProperty("next_offset")>
    Public Property NextOffset() As Integer?

    <JsonProperty("next_page")>
    Public Property NextPage() As Integer?
End Class

Public Class Params

    <JsonProperty("tag")>
    Public Property Tag As String

End Class

Public Class Response(Of TModel As Class)

    <JsonProperty("count")>
    Public Property Count As Integer

    <JsonProperty("results")>
    Public Property Results As IList(Of TModel)

    <JsonProperty("params")>
    Public Property Params As Params

    <JsonProperty("type")>
    Public Property Type As String

    <JsonProperty("pagination")>
    Public Property Pagination As Pagination

End Class