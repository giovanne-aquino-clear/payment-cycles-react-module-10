const express = ('express')

module.exports = function(server){

    const router = express.Router()
    server.use('/api', router)

    const BillingCycle = require('../api/billingCicle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}