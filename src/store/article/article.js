/**
 * Created by pc on 2017/5/4.
 */
// 获取新闻列表
import api from '../../api/index-server'
export const newsDetailApi = 'news/detail'
export function fetchNewsDetail (data) {
  return api.post(newsDetailApi, data)
}
