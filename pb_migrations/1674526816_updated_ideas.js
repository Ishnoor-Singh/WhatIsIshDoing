migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5bem0rung1hgdyz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1mrjpjju",
    "name": "details",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5bem0rung1hgdyz")

  // remove
  collection.schema.removeField("1mrjpjju")

  return dao.saveCollection(collection)
})
