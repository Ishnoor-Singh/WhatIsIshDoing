migrate((db) => {
  const collection = new Collection({
    "id": "5bem0rung1hgdyz",
    "created": "2023-01-24 02:18:55.278Z",
    "updated": "2023-01-24 02:18:55.278Z",
    "name": "ideas",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "yk2m8wxw",
        "name": "ideaString",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("5bem0rung1hgdyz");

  return dao.deleteCollection(collection);
})
