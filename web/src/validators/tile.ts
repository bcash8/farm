import type { JSONSchemaType } from "ajv";
import { ajv } from "../ajv";

export type TileType = PlantTile | EmptyTile;

export type PlantTile = {
  category: 'Plant';
  type: string;
  amount: number;
  progress: number;
}

export type EmptyTile = {
  category: 'Empty';
}

const plantTileSchema: JSONSchemaType<PlantTile> = {
  type: 'object',
  properties: {
    category: { type: 'string', enum: ['Plant'] },
    type: { type: 'string' },
    amount: { type: 'number' },
    progress: { type: 'number' }
  },
  required: ['category', 'type', 'amount', 'progress']
}

const emptyTileSchema: JSONSchemaType<EmptyTile> = {
  type: 'object',
  properties: {
    category: { type: 'string', enum: ['Empty'] }
  },
  required: ['category'],
}

const tileSchema: JSONSchemaType<TileType> = {
  oneOf: [
    emptyTileSchema,
    plantTileSchema
  ]
}
export const validateTile = ajv.compile(tileSchema);