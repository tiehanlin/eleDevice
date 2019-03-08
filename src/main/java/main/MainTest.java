package main;

public class MainTest {

	public static void main(String[] args) throws Exception {
		MailOperation operation = new MailOperation();
        String user = "tiehanlin@163.com";
        String password = "KinG19950504";
        String host = "smtp.163.com";
        String from = "tiehanlin@163.com";//me
        String to = "476494344@qq.com";// �ռ���
        String subject = "353245";
        //��������
        StringBuffer sb = new StringBuffer();
        String yzm = "123";
        sb.append("<!DOCTYPE>"+"<div bgcolor='#f1fcfa'   style='border:1px solid #d9f4ee; font-size:14px; line-height:22px; color:#005aa0;padding-left:1px;padding-top:5px;   padding-bottom:5px;'><span style='font-weight:bold;'>��ܰ��ʾ��</span>"
                          + "<div style='width:950px;font-family:arial;'>��ӭʹ��NET΢�������ע����Ϊ��<br/><h2 style='color:green'>"+yzm+"</h2><br/>���ʼ���ϵͳ�Զ�����������ظ���<br/>��л����ʹ�á�<br/>���ݶ���������������޹�˾</div>"
                         +"</div>");
            String res = operation.sendMail(user, password, host, from, to,subject, sb.toString());
            System.out.println(res);

	}

}
