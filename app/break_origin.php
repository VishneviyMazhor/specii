<?php
//$url;
//if(isset($_POST['urlparam'])) $url = $_POST['urlparam'];
//if(isset($_GET['urlparam'])) $url = $_GET['urlparam'];
//$url = str_replace("'","",urldecode($url));

//get_web_page($url);
/*$ch = curl_init($url);*/
# /forum/loginout.php HTTP/1.1


/*curl_setopt ($ch, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.114 Safari/537.36"); 
# User-Agent
*/

//$headers = array
//(
//    'Accept: application/json, text/javascript, */*; q=0.01',
//    'Accept-Language: ru-RU,ru;q=0.8,en-US;q=0.6,en;q=0.4,uk;q=0.2',
//    'Accept-Encoding: gzip,deflate,sdch'
//); 

#curl_setopt($ch, CURLOPT_HTTPHEADER,$headers); 
# добавляем заголовков к нашему запросу. Чтоб смахивало на настоящих

//curl_setopt($ch, CURLOPT_REFERER, "https://api.vk.com");

// curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
// # Убираем вывод данных в браузер. Пусть функция их возвращает а не выводит

//curl_exec($ch); // выполняем запрос curl
//curl_close($ch);

// Tviggle - рабочий вариант

// if(isset($_GET['result'])) echo $_GET['result']." & ".$_GET['error']; 
// $serviceUrl = 'http://pub.tvigle.ru/soap/index.php?wsdl';
// $soap = new SoapClient
// (
//       $serviceUrl,
//       array
//       (
//             'login'     =>    'pavel.gdr',
//             'password'  =>    'ptavuilgglegaidarshy@ukrNET4102', 
//       )
// );
// $upload = $soap->upload_form_url();
// echo '<form id="uploadvideo" action="'.$upload.'?redir=http://fantestic.esy.es/vimeotest/videotovk.php" method="post" ENCTYPE="multipart/form-data" >
//  Файл:<input type="File" name="file" />
//  <input type="Submit" value="отправить">
//  </form>';

/*
function get_web_page( $url )
{
    $options = array(
        CURLOPT_RETURNTRANSFER => true,     // return web page
        CURLOPT_HEADER         => false,    // don't return headers
        CURLOPT_FOLLOWLOCATION => true,     // follow redirects
        CURLOPT_ENCODING       => "",       // handle all encodings
        CURLOPT_USERAGENT      => "spider", // who am i
        CURLOPT_AUTOREFERER    => true,     // set referer on redirect
        CURLOPT_CONNECTTIMEOUT => 120,      // timeout on connect
        CURLOPT_TIMEOUT        => 120,      // timeout on response
        CURLOPT_MAXREDIRS      => 10,       // stop after 10 redirects
        CURLOPT_SSL_VERIFYPEER => false     // Disabled SSL Cert checks
    );

    $ch      = curl_init( $url );
    curl_setopt_array( $ch, $options );
    $content = curl_exec( $ch );
    $err     = curl_errno( $ch );
    $errmsg  = curl_error( $ch );
    $header  = curl_getinfo( $ch );
    curl_close( $ch );

    $header['errno']   = $err;
    $header['errmsg']  = $errmsg;
    $header['content'] = $content;
    return $header;
}*/

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL,"https://script.google.com/macros/s/AKfycbx8FgY9EysWAqtYnqXbe2hbqpFm2gcYRynjF-TsdMJbibR-8BTu/exec");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS,
            $_POST['shmuser']);

// in real life you should use something like:
// curl_setopt($ch, CURLOPT_POSTFIELDS, 
//          http_build_query(array('postvar1' => 'value1')));

// receive server response ...
//curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$server_output = curl_exec ($ch);

curl_close ($ch);
echo $server_output;
/*
https://script.googleusercontent.com/macros/echo?user_content_key=yefs746Lb…MgUVDmFLoSVqEicFuqjts9JThZDeyVsh&amp;lib=McdrpV6Mkio0oxZ297HPPkkpPKLOt0aln
$ch = curl_init("http://www.example.com/");
$fp = fopen("example_homepage.txt", "w");

curl_setopt($ch, CURLOPT_FILE, $fp);
curl_setopt($ch, CURLOPT_HEADER, 0);

curl_exec($ch);
curl_close($ch);
fclose($fp);*/
$curl = curl_init();
// Set some options - we are passing in a useragent too here
curl_setopt_array($curl, array(
    //CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => 'https://script.googleusercontent.com/macros/echo?user_content_key=T2JBeUmWcspZ9gZYo3cPAWzTsmvKS_cCKe3YASSUJt62D7j8cJdaSr-IqXNtq2YHRlXDJRfAa-t-5hjw6zPMFNOEd9XxNQJJm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnAHdrKy-YJEvvqVQ8oQjypd-POxuBy-lvq9KxEb24e74MgUVDmFLoSVqEicFuqjts9JThZDeyVsh&amp;lib=McdrpV6Mkio0oxZ297HPPkkpPKLOt0aln',
    CURLOPT_USERAGENT => 'Codular Sample cURL Request'
));
// Send the request & save response to $resp
$resp = curl_exec($curl);
// Close request to clear up some resources
curl_close($curl);
echo $resp;
?>