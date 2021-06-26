import Vue from 'vue'

/* -------------------------------------------------------------------------- */
/*                     Filters file  **use Vue.filter()                       */
/* -------------------------------------------------------------------------- */
/**
 * Format date
 * @para - String date
 * @return - date like Sat, 7 Nov 2020
 */
Vue.filter('formatDate',function(date)
{
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ]
    const days = [ 'Sun','Mon','Tue','Wed','Thur','Fri','Sat' ]
    let posted_on = new Date(date)
    let formatted_date =
        days[ posted_on.getDay() ] +
        ', ' +
        posted_on.getDate() +
        ' ' +
        months[ posted_on.getMonth() ] +
        ' ' +
        posted_on.getFullYear()

    return formatted_date
})

/**
 * Format time
 * @para - String time
 * @return
 */
Vue.filter('formatTime',function(date)
{
    let posted_on = new Date(date)

    var hours = posted_on.getHours()
    hours = hours > 10 ? hours : '0' + hours

    var minutes = posted_on.getMinutes()
    minutes = minutes > 10 ? minutes : '0' + minutes

    var formatted_date = `${ hours }:${ minutes }`

    return formatted_date
})

/**
 * Split name by space " "
 * @param - name
 * @return -splited name[0]
 */
Vue.filter('splitName',function(name)
{
    return name.replace(/ .*/,'')
})

/**
 *  Truncates long strings if the strlen is greater than limit passed
 * @param value - string to be truncated
 * @param limit - preffered string length
 * @return value
 */
Vue.filter('truncate',function(value,limit)
{
    if (value.length > limit) {
        value = value.substring(0,limit - 3) + '...'
    }

    return value
})

/**
 *  Gets the first letter of a string
 * @param name
 * @return name
 */
Vue.filter('getInitials',function(name)
{
    return name.substring(0,2).toUpperCase()
})



/**
 *  Replace email id text with **
 * @param email
 * @return email - john***e@gmail.com
 */
Vue.filter('filterEmail',function(email)
{
    var a = email.split('@')
    var b = a[ 0 ]
    var newstr = ''
    for (var i in b) {
        if (i > 2 && i < b.length - 1) newstr += '*'
        else newstr += b[ i ]
    }
    return newstr.substring(0,7) + '@' + a[ 1 ]
})

/**
 *  Formats Amount
 * @params amount,currency,intlFmt
 * @return amount 
 */
Vue.filter('formatAmount',function(amount,currency = 'CAD',intlFmt = 'en-US')
{
    const amt = parseInt(amount);

    const formattedAmount = new Intl.NumberFormat(intlFmt,{
        style: 'currency',
        currency,
    }).format(amt)
    return formattedAmount
})


