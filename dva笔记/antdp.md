### 路由系统
#### 一级路由
```
 const routerData = getRouterData(app);
  const UserLayout = routerData['/user'].component;
  const BasicLayout = routerData['/'].component;
  return (
    <LocaleProvider locale={zhCN}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/user" component={UserLayout} />
          <AuthorizedRoute
            path="/"
            render={props => <BasicLayout {...props} />}
            authority={['admin', 'user']}
            redirectPath="/user/login"
          />
        </Switch>
      </ConnectedRouter>
    </LocaleProvider>
  );
```
整个项目的路由分两部分：一部分是user相关的，一部分是业务相关的
    含有/user的路由 — 对应的路由组件时UserLayout
    排除/user外的路由 — 对应的路由组件时BasicLayout

#### 二级路由
