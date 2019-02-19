最近遇到很多深层传递props的情况，代码很繁琐，想要使用context解决问题，阅读context的时候发现16.7的文档多了一段before you use context，目前中文文档还是16.6，它提供了一种不使用context解决传递props层级过多的问题，很实用，翻译一下

#### 使用context之前
context主要用于不同层级的组件使用共享的数据时，它会让组件难以重用，谨慎使用。

<b>如果您只想避免将props传递到多个级别，那么component composition 通常是比context更简单的解决方案。</b>

举个例子，想象一个Page通过几个层级传递user和avatarSize到Link和Avatar组件使用：
```
<Page user={user} avatarSize={avatarSize} />
// ... which renders ...
<PageLayout user={user} avatarSize={avatarSize} />
// ... which renders ...
<NavigationBar user={user} avatarSize={avatarSize} />
// ... which renders ...
<Link href={user.permalink}>
  <Avatar user={user} size={avatarSize} />
</Link>
```
如果只有Link和Avator使用user和avatarSize，那么中间的过程就显得多余。
最麻烦的是，如果Avatar需要经过更多props才从顶部获取数据，你需要在中间的每一个组件中添加它们!

解决这个问题的一种方法是在没有context的情况下传递Avatar组件本身，这样中间组件就不需要知道user的prop:
```
function Page(props) {
  const user = props.user;
  const userLink = (
    <Link href={user.permalink}>
      <Avatar user={user} size={props.avatarSize} />
    </Link>
  );
  return <PageLayout userLink={userLink} />;
}

// Now, we have:
<Page user={user} />
// ... which renders ...
<PageLayout userLink={...} />
// ... which renders ...
<NavigationBar userLink={...} />
// ... which renders ...
{props.userLink}
```
这样，只有最顶层的Page组件需要知道Link和Avatar组件使用user和avatarSize属性

在多数情况下，通过减少props的传递和给予根组件跟多的控制权，这种反转的控制方式使你的代码更加简洁。然而，这种方法不适用于每一个场景：如果把更多复杂的组件放在组件树的高层使得那些高层组件更加复杂，让低层级的组件比你想象中的要复杂。

你不局限于为一个组件传递单一的child，你可以传递多个孩子，甚至传递多个组件，example:
```
function Page(props) {
  const user = props.user;
  const content = <Feed user={user} />;
  const topBar = (
    <NavigationBar>
      <Link href={user.permalink}>
        <Avatar user={user} size={props.avatarSize} />
      </Link>
    </NavigationBar>
  );
  return (
    <PageLayout
      topBar={topBar}
      content={content}
    />
  );
}
```
在大多数情况下，当您需要将一个子元素与其直接父元素分离时，这种模式就足够了。如果子元素需要在渲染之前与父元素进行通信，则可以使用render props进行进一步的处理。
