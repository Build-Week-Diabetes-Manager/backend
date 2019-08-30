
//IMPORTS ⬇︎
const db = require('../../data/dbConfig.js');

//EXPORTS ⬇︎
module.exports = {
    get,
    add,
    getBy,
    getByUserId,
    remove,
    update
};

//GET ALL MANAGER ⬇︎
function get() {
    return db('manage');
};

function getByUserId(user_id) {
    // console.log(user)
    return db('manage').where({ user_id })
}
    
function getById(id) {
    return db('manage').where({ id })
}



function getBy(filter) {
    return db('manage').where(filter).first()
}


function add(manage) {
    return db('manage')
    .insert(manage, "id")
    .then(ids => {
        return getById(ids[0])
    })
}


function remove(id) {
    return db('manage')
      .where('id', id)
      .del();
  }

  function update(id, changes) {
    return db('manage')
    
    .where('id', id)
    .update(changes)
    .then(count => (count > 0 ? getById(id) : null))
  }