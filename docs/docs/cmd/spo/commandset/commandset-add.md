# spo commandset add

Add a ListView Command Set to a site.

## Usage

```sh
m365 spo commandset add [options]
```

## Options

`-t, --title <title>`
: The title of the ListView Command Set

`-u, --webUrl <webUrl>`
: The site to add the ListView Command Set.

`-l, --listType <listType>`
: The list or library type to register the Command Set on. Allowed values `List`, `Library` or `SitePages`.

`-i, --clientSideComponentId <clientSideComponentId>`
: The Client Side Component Id (GUID) of the ListView Command Set.

`--clientSideComponentProperties [clientSideComponentProperties]`
: The Client Side Component properties of the ListView Command Set.

`-s, --scope [scope]`
: Scope of the ListView Command Set. Allowed values: `Site`, `Web`. Defaults to `Web`.

`--location [location]`
: The location of the ListView Command Set. Allowed values `ContextMenu`, `CommandBar` or `Both`. Defaults to `CommandBar`.

--8<-- "docs/cmd/_global.md"

## Remarks

Running this command from the Windows Command Shell (cmd.exe) or PowerShell for Windows OS XP, 7, 8, 8.1 without bash installed might require additional formatting for command options that have JSON, XML, or JavaScript values because the command shell treats quotes differently. For example, this is how a ListView Command Set can be created from the Windows cmd.exe:

```sh
m365 spo commandset add --webUrl https://contoso.sharepoint.com/sites/test --title "CLI Commandset" --location "ContextMenu" --listType "List" --clientSideComponentId b41916e7-e69d-467f-b37f-ff8ecf8f99f2 --clientSideComponentProperties '{\"testMessage\":\"Test message\"}'
```

Note, how the clientSideComponentProperties option (-p) has escaped double quotes `'{\"testMessage\":\"Test message\"}'` compared to execution from bash `'{"testMessage":"Test message"}'`.

!!! warning "Escaping JSON in PowerShell"
    When using the `--clientSideComponentProperties` option it's possible to enter a JSON string. In PowerShell 5 to 7.2 [specific escaping rules](./../../../user-guide/using-cli.md#escaping-double-quotes-in-powershell) apply due to an issue. Remember that you can also use [file tokens](./../../../user-guide/using-cli.md#passing-complex-content-into-cli-options) instead.

## Examples

Adds a ListView Command Set to lists on the sales site.

```sh
m365 spo commandset add --title "Some customizer" --clientSideComponentId 799883f5-7962-4384-a10a-105adaec6ffc --listType List --webUrl https://contoso.sharepoint.com/sites/sales
```

Adds a ListView Command Set to lists on the sales site with some properties.

```sh
m365 spo commandset add --title "Some customizer" --clientSideComponentId 799883f5-7962-4384-a10a-105adaec6ffc --clientSideComponentProperties '{ "someProperty": "Some value" }' --listType List --webUrl https://contoso.sharepoint.com/sites/sales
```

## Response

=== "JSON"

    ```json
    {
      "ClientSideComponentId": "b206e130-1a5b-4ae7-86a7-4f91c9924d0a",
      "ClientSideComponentProperties": "",
      "CommandUIExtension": null,
      "Description": null,
      "Group": null,
      "HostProperties": "",
      "Id": "680ccc51-7ddf-4dda-8696-fc606480cc3f",
      "ImageUrl": null,
      "Location": "ClientSideExtension.ListViewCommandSet.CommandBar",
      "Name": null,
      "RegistrationId": "100",
      "RegistrationType": 0,
      "Rights": {
        "High": "0",
        "Low": "0"
      },
      "Scope": 2,
      "ScriptBlock": null,
      "ScriptSrc": null,
      "Sequence": 0,
      "Title": "CLI Commandset",
      "Url": null,
      "VersionOfUserCustomAction": "16.0.1.0"
    }
    ```

=== "Text"

    ```text
    ClientSideComponentId        : b206e130-1a5b-4ae7-86a7-4f91c9924d0a
    ClientSideComponentProperties:
    CommandUIExtension           : null
    Description                  : null
    Group                        : null
    HostProperties               :
    Id                           : 680ccc51-7ddf-4dda-8696-fc606480cc3f
    ImageUrl                     : null
    Location                     : ClientSideExtension.ListViewCommandSet.CommandBar
    Name                         : null
    RegistrationId               : 100
    RegistrationType             : 0
    Rights                       : {"High":"0","Low":"0"}
    Scope                        : 2
    ScriptBlock                  : null
    ScriptSrc                    : null
    Sequence                     : 0
    Title                        : CLI Commandset
    Url                          : null
    VersionOfUserCustomAction    : 16.0.1.0
    ```

=== "CSV"

    ```csv
    ClientSideComponentId,ClientSideComponentProperties,CommandUIExtension,Description,Group,HostProperties,Id,ImageUrl,Location,Name,RegistrationId,RegistrationType,Rights,Scope,ScriptBlock,ScriptSrc,Sequence,Title,Url,VersionOfUserCustomAction
    b206e130-1a5b-4ae7-86a7-4f91c9924d0a,,,,,,680ccc51-7ddf-4dda-8696-fc606480cc3f,,ClientSideExtension.ListViewCommandSet.CommandBar,,100,0,"{""High"":""0"",""Low"":""0""}",2,,,0,CLI Commandset,,16.0.1.0
    ```

=== "Markdown"

    ```md
    # spo commandset add --title "CLI Commandset" --webUrl "https://contoso.sharepoint.com" --clientSideComponentId "b206e130-1a5b-4ae7-86a7-4f91c9924d0a" --listType "List" --scope "Site"

    Date: 10/2/2023

    ## CLI Commandset (680ccc51-7ddf-4dda-8696-fc606480cc3f)

    Property | Value
    ---------|-------
    ClientSideComponentId | b206e130-1a5b-4ae7-86a7-4f91c9924d0a
    ClientSideComponentProperties |
    CommandUIExtension | null
    Description | null
    Group | null
    HostProperties |
    Id | 680ccc51-7ddf-4dda-8696-fc606480cc3f
    ImageUrl | null
    Location | ClientSideExtension.ListViewCommandSet.CommandBar
    Name | null
    RegistrationId | 100
    RegistrationType | 0
    Rights | {"High":"0","Low":"0"}
    Scope | 2
    ScriptBlock | null
    ScriptSrc | null
    Sequence | 0
    Title | CLI Commandset
    Url | null
    VersionOfUserCustomAction | 16.0.1.0
    ```

