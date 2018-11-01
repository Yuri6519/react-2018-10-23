import React from 'react'
import Enzyme, { render, shallow, mount } from 'enzyme' //render - вместе с child, shallow - только родитель, mount - рендерит полностью все (и позволит клинкуть на кнопку)
import AdapterReact16 from 'enzyme-adapter-react-16'
import DecorArticleList, { ArticleList } from './article-list'
import articles from '../fixtures'

Enzyme.configure({ adapter: new AdapterReact16() })

describe('Article List', () => {
  it('Test render ArticleList', function() {
    const wrapper = shallow(<ArticleList items={articles} />)

    expect(wrapper.find('.test-article-list-item').length).toEqual(
      articles.length
    ) // все статьи должны быть
  })

  it('Test render Articles closed', function() {
    const wrapper = render(<ArticleList items={articles} />)

    expect(wrapper.find('.test-article_body').length).toEqual(0) // не должно быть статей - все закрыты
  })

  it('Test render Article on click', function() {
    const wrapper = mount(<DecorArticleList items={articles} />)

    wrapper
      .find('.test-article_btn')
      .at(0)
      .simulate('click')

    expect(wrapper.find('.test-article_body').length).toEqual(1) // при нажатии кнопки только одна статья видна
  })
})
