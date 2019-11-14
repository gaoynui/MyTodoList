package com.casic.demo.controller;
import com.casic.demo.entity.RestResult;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

/**
 * 数据控制层
 * . @RestController 该类下所有返回值默认以json格式进行返回
 * . @RequestMapping 匹配url地址 /part
 * . @CrossOrigin 允许任何域名使用
 * Created by gy
 */
@RestController
public class ContentController {

    @CrossOrigin(origins = "*")
    @RequestMapping(value = {"part"}, method = RequestMethod.POST)
    @ResponseBody
    public RestResult getRequest(String whatPart) {
        System.out.println("whatPart: " + whatPart);

        //返回的内容初始化，依据过滤器格式{code: , message: , data:}
        List<Content> myList = new ArrayList<>();
        RestResult rr1 = new RestResult();
        rr1.setCode(200);
        rr1.setMessage("OK");

        //生成表格内容
        //part1
        Content c11 = new Content("Git", "git学习.md", "时间：2019/10/15");
        Content c12 = new Content("Docker", "docker学习.md", "时间：2019/10/16");
        Content c13 = new Content("Gradle", "Gradle学习.md", "时间：2019/10/16");
        //part2
        Content c21 = new Content("Node Js", "Node Js学习.md", "时间：2019/10/18");
        //part3
        Content c31 = new Content("View UI", "View UI学习.md", "时间：2019/10/21");
        Content c32 = new Content("Element", "View UI学习.md", "参考：https://cloud.tencent.com/developer/chapter/18052");
        //part4
        Content c41 = new Content("Spring Demo", "参考：https://github.com/boylegu/SpringBoot-vue", "上海市人口信息系统");
        Content c42 = new Content("Spring Demo", "参考：https://github.com/lenve/VBlog", "多人博客管理平台");
        Content c43 = new Content("Spring Boot API", "参考：https://docs.spring.io/spring-boot/docs/2.2.0.RELEASE/api/", "官方API文档");
        Content c44 = new Content("Java Web相关学习笔记", "https://github.com/gaoynui/MyBox/tree/master/java_web", "算法、数据库、基础知识");
        //part5
        Content c51 = new Content("mysql", "mysql&mongodb学习.md", "时间：2019/10/25");
        Content c52 = new Content("mongodb", "mysql&mongodb学习.md", "时间：2019/10/26");
        //part6
        Content c61 = new Content("登录接口", "login ", "参数：(String name, String password)；返回：(getSuccessResult, getFailedResult)");
        Content c62 = new Content("数据接口", "getRequest ", "参数：(String whatPart)；返回：RestResult对象");
        //part7
        Content c71 = new Content("前端登录", "方法： onSubmit函数通过post方法回调", "后端接口：login");
        Content c72 = new Content("前端数据获取", "方法： getInstruction函数通过post方法回调", "后端接口：getRequest");
        //part8
        Content c81 = new Content("相关概念",
                "etcd,apiserver,scheduler,kubelet,kube-proxy,Ingress,node,pod,RC,RS,StatefulSet,Deployment,service,volume",
                "用于管理云平台中多个主机上容器化的应用");
        Content c82 = new Content("kubectl命令", "官方文档：https://kubernetes.io/docs/reference/kubectl/overview/", "结合YAML文件");
        Content c83 = new Content("部署K8S", "基于ubuntu虚拟机使用minikube搭建k8s部署", "需要国内镜像");

        //根据不同请求返回数据给前端
        if(whatPart.equals("part1")){
            myList.add(c11);
            myList.add(c12);
            myList.add(c13);
            rr1.setData(myList);
            return rr1;
        }
        if(whatPart.equals("part2")){
            myList.add(c21);
            rr1.setData(myList);
            return rr1;
        }
        if(whatPart.equals("part3")){
            myList.add(c31);
            myList.add(c32);
            rr1.setData(myList);
            return rr1;
        }
        if(whatPart.equals("part4")){
            myList.add(c41);
            myList.add(c42);
            myList.add(c43);
            myList.add(c44);
            rr1.setData(myList);
            return rr1;
        }
        if(whatPart.equals("part5")){
            myList.add(c51);
            myList.add(c52);
            rr1.setData(myList);
            return rr1;
        }
        if(whatPart.equals("part6")){
            myList.add(c61);
            myList.add(c62);
            rr1.setData(myList);
            return rr1;
        }
        if(whatPart.equals("part7")){
            myList.add(c71);
            myList.add(c72);
            rr1.setData(myList);
            return rr1;
        }
        else if(whatPart.equals("part8")){
            myList.add(c81);
            myList.add(c82);
            myList.add(c83);
            rr1.setData(myList);
            return rr1;
        }
        return rr1;
    }

    //对应前端的表格内容
    public class Content {
        private String name;
        private String doc;
        private String remark;

        public Content(String name, String doc, String remark) {
            this.name = name;
            this.doc = doc;
            this.remark = remark;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getDoc() {
            return doc;
        }

        public void setDoc(String doc) {
            this.doc = doc;
        }

        public String getRemark() {
            return remark;
        }

        public void setRemark(String remark) {
            this.remark = remark;
        }
    }
}


