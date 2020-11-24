const moment=require('moment')

module.exports={
    formateDate:function(Date,format){
        return moment(Date).format(format)
    }
}