<?php
/**
 * Custom Caracal Mailer
 *
 * Author: Mladen Mijatov
 */
namespace Modules\CustomMailer;
use \ContactForm_Mailer;
class Mailer extends ContactForm_Mailer {
	private $variables = array();
	/**
	 * Get localized name.
	 *
	 * @return string
	 */
	public function get_title() {
		return 'CRM';
	}
	public function start_message() {}
	/**
	 * Finalize message and send it to specified addresses.
	 *
	 * Note: Before sending, you *must* check if contact_form
	 * function detectBots returns false.
	 *
	 * @return boolean
	 */
	// if ($this->variables['notification'] == "1") {
	// 	$notification = "מאושר";
	// } else {
	// 	$notifcation = "לא מאושר";
	// }

	public function send() {
		$post_data = array(
			'last_name' => $this->variables['name'],
			'job'   => $this->variables['job'],
			'company' => $this->variables['company'],
			'phone'   => $this->variables['phone'],
			'email'   => $this->variables['email'],
			'00Nb000000AOOfb'   => 'מאושר',
			'00Nb000000AL958'   => $this->variables['utm_source'],
			'00Nb000000AL95D'   => $this->variables['utm_medium'],
			'00Nb000000AL95S'   => $this->variables['utm_content'],
			'00Nb000000AL95I'   => $this->variables['utm_campaign'],
			'00Nb000000AL95N'   => $this->variables['utm_term'],
			'oid'   => '',
			'retURL'   => 'http://hashik.co.il/thank-you',
			'lead_source'   => 'אינטרנט',
			'Campaign_ID'   => '',
			'recordType'   => ''
		);
		//$post_data = array_merge($post_data, $this->variables);
		$url = 'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8';
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_HEADER, true);
		$response = curl_exec($ch);
		error_log(var_export($response, true));
		return true;
	}
	/**
	 * Set variables to be replaced in subject and body.
	 *
	 * @param array $params
	 */
	public function set_variables($variables) {
		$this->variables = $variables;
	}
	public function set_sender($address, $name=null) {}
	public function add_recipient($address, $name=null) {}
	public function add_cc_recipient($address, $name=null) {}
	public function add_bcc_recipient($address, $name=null) {}
	public function add_header_string($key, $value) {}
	public function set_subject($subject) {}
	public function set_body($plain_body, $html_body=null) {}
	public function attach_file($file_name, $attached_name=null, $inline=false) {}
}
?>