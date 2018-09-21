## inline-block
问题描述：a标签和img标签都是内联元素，img下面会有一条线，两个盒子不重合
```
		<section class="link-img">
			<a href="#"><img src="./img/design.jpg" alt=""></a>
		</section>
```

原因：inline元素为了正确的显示英文字母如y、j、g等有尾巴的，会留下有下一点空间
解决方法，如果a内无任何文字，font-size可以设置为0；

## 遮罩
问题描述: 写了个蒙版遮罩，导致了nav无法点击，因为被遮罩挡住了。
```
/* 遮罩 挡不住position为absolute的标签*/
header::before {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.3);
}
```
解决方法：
把被挡住的元素用absolute表示：
```
header .logo {
  color: #f7ba3e;
  font-size: 32px;
  position: absolute;
  left: 10%;
  /* float: left; */
  margin-top: 10px;
}
```
PS：z-index是不行的，header::before会失去遮罩效果