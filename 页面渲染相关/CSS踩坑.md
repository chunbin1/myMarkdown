## inline-block
问题描述：a标签和img标签都是内联元素，img下面会有一条线，两个盒子不重合
```
		<section class="link-img">
			<a href="#"><img src="./img/design.jpg" alt=""></a>
		</section>
```

原因：inline元素为了正确的显示英文字母如y、j、g等有尾巴的，会留下有下一点空间
解决方法，如果a内无任何文字，font-size可以设置为0；
