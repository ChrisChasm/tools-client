
import { tools } from 'services/tools';

export class Home {
  constructor() {
    this.categories = [
      // {
      //   name: 'Favorites',
      //   tools: []
      // },
      // {
      //   name: 'Leadership',
      //   tools: []
      // },
      // {
      //   name: 'Entry',
      //   tools: []
      // },
      // {
      //   name: 'Gospel',
      //   tools: []
      // },
      {
        name: 'Gen Mapping',
        tools: [
          tools[0],
          tools[1]
        ]
      },
      // {
      //   name: 'Discipleship',
      //   tools: []
      // }
    ];
  }
}
