# planner roster member get

Gets a member of the specified Microsoft Planner Roster

## Usage

```sh
m365 planner roster member get [options]
```

## Options

`--rosterId <rosterId>`
: ID of the Planner Roster.

`--userId [userId]`
: User's Azure AD ID. Specify either `userId` or `userName` but not both.

`--userName [userName]`
: User's UPN (user principal name, e.g. johndoe@example.com). Specify either `userId` or `userName` but not both.

--8<-- "docs/cmd/_global.md"

## Remarks

!!! attention
    This command is based on an API that is currently in preview and is subject to change once the API reached general availability.

## Examples

Gets a specific user by user name as member of the Planner Roster

```sh
m365 planner roster member get --rosterId tYqYlNd6eECmsNhN_fcq85cAGAnd --userName john.doe@contoso.com
```

Gets a specific user by ID as member of the Planner Roster

```sh
m365 planner roster member get --rosterId tYqYlNd6eECmsNhN_fcq85cAGAnd --userId d049a857-f1c3-4fb3-a629-d8cfb3bd7275
```

## Response

=== "JSON"

    ```json
    {
      "id": "b3a1be03-54a5-43d2-b4fb-6562fe9bec0b",
      "userId": "2056d2f6-3257-4253-8cfc-b73393e414e5",
      "tenantId": "5b7b813c-2339-48cd-8c51-bd4fcb269420",
      "roles": []
    }
    ```

=== "Text"

    ```text
    id      : b3a1be03-54a5-43d2-b4fb-6562fe9bec0b
    roles   : []
    tenantId: 5b7b813c-2339-48cd-8c51-bd4fcb269420
    userId  : 2056d2f6-3257-4253-8cfc-b73393e414e5
    ```

=== "CSV"

    ```csv
    id,userId,tenantId,roles
    b3a1be03-54a5-43d2-b4fb-6562fe9bec0b,2056d2f6-3257-4253-8cfc-b73393e414e5,5b7b813c-2339-48cd-8c51-bd4fcb269420,[]
    ```
    
=== "Markdown"

    ```md
    # planner roster member get --rosterId "tYqYlNd6eECmsNhN_fcq85cAGAnd" --userId "2056d2f6-3257-4253-8cfc-b73393e414e5"

    Date: 18/2/2023

    ## b3a1be03-54a5-43d2-b4fb-6562fe9bec0b

    Property | Value
    ---------|-------
    id | b3a1be03-54a5-43d2-b4fb-6562fe9bec0b
    userId | 2056d2f6-3257-4253-8cfc-b73393e414e5
    tenantId | 5b7b813c-2339-48cd-8c51-bd4fcb269420
    roles | []
    ```
