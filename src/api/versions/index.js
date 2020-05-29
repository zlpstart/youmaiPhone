import request from '../../../request'

export function RecruitDuty() {
  return request({
    url: '/?m=Index&a=RecruitList',
    method: 'get',
  })
}