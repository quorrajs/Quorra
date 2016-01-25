/**
 * request.js
 *
 * @author: Harish Anchu <harishanchu@gmail.com>
 * @copyright 2015, QuorraJS. All rights reserved.
 * @license Licensed under MIT
 */

var config = {

    /*
     |--------------------------------------------------------------------------
     | Trust Proxy
     |--------------------------------------------------------------------------
     |
     | Indicates the app is behind a front-facing proxy, and to use the
     | X-Forwarded-* headers to determine the connection and the IP address of
     | the client. NOTE: X-Forwarded-* headers are easily spoofed and the detected
     | IP addresses are unreliable.
     |
     | See docs(#quorra-behind-proxies) to find out the possible values for this
     | option
     |
     */

    'trustProxy': false,

    /*
     |--------------------------------------------------------------------------
     | Subdomain Offset
     |--------------------------------------------------------------------------
     |
     | The number of dot-separated parts of the host to remove to access
     | subdomain.
     |
     | For example, if the domain is "tobi.ferrets.example.com":
     | If "subdomain offset" is 2, req.subdomains is `["ferrets", "tobi"]`.
     | If "subdomain offset" is 3, req.subdomains is `["tobi"]`.
     |
     */

    'subdomainOffset': 2
};

module.exports = config;

