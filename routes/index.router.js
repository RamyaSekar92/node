const index = require('../controllers/index.controller')

module.exports = (openRouter, apiRouter) => {

    /* Open routes */


    openRouter.route('/addUser')
        .post(index.addUser);

    openRouter.route('/getUserDetails')
        .get(index.userDetails);

    openRouter.route('/updateUserDetails')
        .put(index.updateUser);

        openRouter.route('/deleteUser')
        .delete(index.deleteUser);


    /* Protected routes */
    apiRouter.route('/helloWorld')
        .get(index.helloWorld);

}