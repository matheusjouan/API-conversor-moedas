import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('transactions', table => {
    table.increments('id').primary();
    table.integer('user_id').notNullable();
    table.string('currency_source').notNullable();
    table.float('value_source').notNullable();
    table.string('currency_target').notNullable();
    table.float('value_target').notNullable();
    table.float('rate').notNullable();
    table.date('date').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropSchema('transactions');
}
