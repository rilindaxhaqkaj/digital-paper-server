exports.shorthands = undefined
exports.up = pgm => {
  pgm.createTable('example', {
    id: 'serial',
    name: { type: 'varchar(1000)', notNull: true },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  })
  pgm.createIndex('example', 'id')
}
exports.down = pgm => {}
