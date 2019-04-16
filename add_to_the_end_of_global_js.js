// x-open HELP add-on
var HELP_OPEN_EXCHANGE = 
{
    'x-match':
    'The binding type determines how match operators are evaluated to decide if binding is true for a given message.\
      <dl>\
        <dt>all</dt>\
        <dd>all match operators must be true (and all header keys must match in the message)</dd>\
        <dt>any</dt>\
        <dd>at least one match operator must be true</dd>\
      </dl>',

    'x-?hkv' :
    'Compare values of a given key according to a given operator; for binary operators, the left term is defined by the message key\'s value. Match operator is evaluated as false if there is no corresponding key in message headers.\
      <dl>\
        <dt>&le; / &lt; / &gt; / &ge;</dt>\
        <dd>numeric values only</dd>\
        <dt>= / &#8800;</dt>\
        <dd>depending on binding type, may be a list of values</dd>\
        <dt>RE / !RE</dt>\
        <dd>message\'s key value must match (NOT match) the regex defined in binding</dd>\
      </dl>',

    'x-?hk' :
    'Base the match on the existence or the non-existence of some key(s) in message\'s headers. Value type is always string; may be a list of values.',

    'x-?rk' :
    'Compare values of message\'s routing key; value type is always string.\
      <dl>\
        <dt>= / &#8800;</dt>\
        <dd>depending on binding type, may be a list of values</dd>\
        <dt>RE / !RE</dt>\
        <dd>message\'s routing key value must match (NOT match) the regex defined in binding</dd>\
        <dt>AMQP topic / (ci)</dt>\
        <dd>value is an AMQP topic pattern (* is one word, # is 0 or more words); use "(ci)" to be case insensitive</dd>\
      </dl>',

    'x-?pr' :
    '<p>Match on properties; the type used depends on property :</p>\
     <p>Use \'string\' with :</p>\
      <ul>\
      <li>app_id</li>\
      <li>cluster_id</li>\
      <li>content_encoding</li>\
      <li>content_type</li>\
      <li>correlation_id</li>\
      <li>message_id</li>\
      <li>reply_to</li>\
      <li>type</li>\
      <li>user_id</li>\
      </ul>\
     <p>Use \'number\' with :</p>\
      <ul>\
      <li>delivery_mode</li>\
      <li>expiration</li>\
      <li>priority</li>\
      <li>timestamp</li>\
      </ul>',

    'x-?dt' :
    'REGEX match on the UTC or local datetime the message is processed by the exchange; value is evaluated ONCE per exchange entry.<br/><br/>The string format of the returned datetime is : "YYYYMMDD HHmmSS d We" (3 spaces) with :<br/>YYYYMMDD : year (4 digits) month (01..12) day (01..31)<br/>HHmmSS : hour (00..23) minute (00..59) second (00..59)<br/>d : day of week (1 for monday.. 7 is sunday)<br/>We : week number as defined by ISO 8601 (01..53)',

    'x-maindest':
    'Change value of the primary destination.\
      <dl>\
        <dt>queue from msg rk</dt>\
        <dd>the message routing key represents the destination queue, exactly like in default exchange</dd>\
        <dt>delete</dt>\
        <dd>as you can guess, remove primary destination (useful when destinations are otherwise defined for example)</dd>\
      </dl>',

    'x-order':
    'Define the evaluation order of binding as an integer between 100 and 999999; default is 10000. Other values are reserved for future use.',

    'x-goto':
    'Define the next binding to evaluate according to its order and depending on the current binding\'s evaluation; can only go formard and must be an integer between 100 and 999999.',

    'x-stop':
    'Stop evaluate next bindings for that exchange depending on the current binding\'s evaluation.',

    'x-routing' :
    'Depending on the current binding\'s evaluation, allows to add or delete other destinations (queue(s) and/or exchange(s)). Contrary to the main destination declared in the binding, those other destinations are not validated so that they may exist or not, and binding is not deleted when they are deleted.\
    <dl>\
      <dt>true/false RE !RE</dt>\
      <dd>use "true" or "false" to specify fully named destination, "RE" or "!RE" to regex match destinations\</dd>\
      <dt>(m)</dt>\
      <dd>allow those destinations to be set by message\'s header\
    </dl>'
};

$.extend(HELP, HELP_OPEN_EXCHANGE);

