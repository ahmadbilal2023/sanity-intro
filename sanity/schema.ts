import { type SchemaTypeDefinition } from 'sanity'

const pet = {
  name: "pet",
  title: "Pett",
  type: "document",
  fields: [
    {
      name: "pet_name",
      title: "Pet name",
      type: "string",
    },
    {
      name: "type",
      title: "Pet Type",
      type: "string",
    },
    {
      name: "pet_image",
      title: "Pet Image",
      type: "image",
    }
  ]
}


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pet],
}
