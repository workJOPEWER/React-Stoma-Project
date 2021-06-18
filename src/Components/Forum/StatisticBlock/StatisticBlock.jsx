import React from 'react'
import f from './StatisticBlock.module.scss'
import {Table} from 'react-bootstrap'


const StatisticBlock = (props) => {
  return(
    <div className={f.addBlock}>
      <Table bordered size="sm">
        <thead>
        <tr className={f.thead}>
          <th className={f.forumPost}>Статистика форума</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <ul>
              <li>Зарегистрированно:</li>
              <li>Онлайн:</li>
              <li>количесво категорий:</li>
              <li>количество тем:</li>
              <li>количество сообщений:</li>
            </ul>
          </td>
        </tr>
        </tbody>
      </Table>
    </div>
  )
}
export default StatisticBlock;