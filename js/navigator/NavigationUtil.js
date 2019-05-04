export default class NavigationUtil {
  /**
   * 跳转指定页面
   * @param navigation
   */
  static goPage(params, page) {
    // const {navigation} = params;
    const navigation = NavigationUtil.navigation;
    if (!navigation) {
      console.log('navigation can not to be null')
      return;
    }
    navigation.navigate({
      page,
      ...params,
    });
  }

  /**
   * 返回到上一页
   * @param navigation
   */
  static goBack(navigation) {
    navigation.goBack();
  }

  /**
   * 重置到首页
   * @param params
   */
  static resetToHomePage(params) {
    const {navigation} = params;
    navigation.navigate('Main');

  }

}