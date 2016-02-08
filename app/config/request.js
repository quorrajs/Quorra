
var config = {

    /*
     |--------------------------------------------------------------------------
     | Trust Proxy
     |--------------------------------------------------------------------------
     |
     | Indicates the app is behind a front-facing proxy, and to use the
     | X-Forwarded-* headers to determine the connection and the IP address of the
     | client. When enabled, Quorra attempts to determine the IP address of the
     | client connected through the front-facing proxy, or series of proxies. The
     | req.ips property, then, contains an array of IP addresses the client is
     | connected through.
     |
     | Refer docs(#quorra-behind-proxies) to find out the possible values for this
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

