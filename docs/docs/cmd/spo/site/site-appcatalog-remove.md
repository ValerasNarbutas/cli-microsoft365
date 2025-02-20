# spo site appcatalog remove

Removes site collection app catalog from the specified site

## Usage

```sh
m365 spo site appcatalog remove [options]
```

## Options

`-u, --siteUrl <siteUrl>`
: URL of the site collection containing the app catalog to disable

--8<-- "docs/cmd/_global.md"

## Remarks

While the command uses the term *'remove'*, like its equivalent PowerShell cmdlet, it does not remove the special library **Apps for SharePoint** from the site collection. Instead, it disables the site collection app catalog in that site. Packages deployed to the app catalog are not available within the site collection.

!!! important
    To use this command you have to have permissions to access the tenant admin site.
    
## Examples

Remove the site collection app catalog from specified site

```sh
m365 spo site appcatalog remove --siteUrl https://contoso.sharepoint/sites/site
```

## More information

- Use the site collection app catalog: [https://docs.microsoft.com/en-us/sharepoint/dev/general-development/site-collection-app-catalog](https://docs.microsoft.com/en-us/sharepoint/dev/general-development/site-collection-app-catalog)
