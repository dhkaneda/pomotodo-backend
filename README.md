### Example TODO body
```json
{
  "id": "892081c1-4872-416b-a508-97f18cfa4780",
  "name": "Add entry",
  "desc": "Personal log",
  "dateCreated": "1622077232207",
  "dateCompleted": "1622077232208",
  "tags": ["caput"],
  "pomodoroCount": 2
}
```
### Example TODO order body
```json
[
  "57f78108-4704-41a9-989b-3721ceedfad1",
  "3b23c502-9ac3-45cc-87d6-2221e69fa2b4",
  "06044689-64dc-4408-a6d3-8936f559c119"
]
```

As a user, I want to save a todo so that I can see it upon revisiting

    Given I have the details of my todo
    When I add a todo
    Then my todo is saved

As a user, I want to view all of my saved todos in order

    Given I have saved multiple todos
    When I try to get all of my todos
    Then I get a list of my todos in order by id

As as user, I want to update a todo when I complete it

    Given I have saved a todo
    When I update a todo's completion date
    Then I my todo has an updated completion date

As a user I want to update a todos name or description

    Given I have saved a todo
    When I update a todos name OR description
    Then the updated changes are saved

As a user I want to be able to tag my todo multiple times

    Given I have saved a todo
    When I add a tag or another
    Then my todo has the saved tags

As a user I want to be able to record how many pomodoro intervals I have completed for a todo

    Given I have saved a todo
    When I complete a pomodoro interval with a chosen todo
    Then my todo has the saved pomodoro interval count

