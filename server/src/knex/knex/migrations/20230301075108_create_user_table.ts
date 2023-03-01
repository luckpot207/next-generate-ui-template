import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('email').notNullable().unique();
    table.string('password')
    // table.string('pfp')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    // table.float('balance').notNullable().defaultTo(0)
    // table.boolean('status').defaultTo(true)
    // table.boolean('is_connected').defaultTo(false)
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('users')
}
