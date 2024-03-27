/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = pgm => {
  pgm.createTable('songs', {
    id: {
      type: 'VARCHAR(60)',
      primaryKey: true
    },
    title: {
      type: 'VARCHAR(100)',
      notNull: true
    },
    year: {
      type: 'INTEGER',
      notNull: true
    },
    performer: {
      type: 'VARCHAR(100)',
      notNull: true
    },
    genre: {
      type: 'VARCHAR(20)',
      notNull: true
    },
    duration: {
      type: 'INTEGER'
    },
    albumId: {
      type: 'VARCHAR(70)',
      references: 'albums(id)'
    }
  })
}

exports.down = pgm => {
  pgm.dropTable('songs')
}
