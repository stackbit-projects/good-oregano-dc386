import React, {useState, useEffect} from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';
import Comments from "../components/Comments"
import { Layout } from '../components/index';
import { htmlToReact, withPrefix, markdownify } from '../utils';

export default class Post extends React.Component {
    render() {
        const data = _.get(this.props, 'data');
        const config = _.get(data, 'config');
        const page = _.get(this.props, 'page');
        const title = _.get(page, 'title');
        const subtitle = _.get(page, 'subtitle');
        const category = _.get(page, 'category');
        const image = _.get(page, 'content_img_path');
        const imageAlt = _.get(page, 'content_img_alt', '');
        const date = _.get(page, 'date');
        const dateTimeAttr = moment(date).strftime('%Y-%m-%d %H:%M');
        const formattedDate = moment(date).strftime('%A, %B %e, %Y');
        const markdownContent = _.get(page, 'markdown_content');
        const metadata = _.get(page, '__metadata');
        let slug = _.get(metadata, 'urlPath');

        return (
            <Layout page={page} config={config}>
                <article className="post post-full">
                    <header className="post-header inner-sm">
                        <h1 className="post-title underline">{title}</h1>
                        {subtitle && <div className="post-subtitle">{htmlToReact(subtitle)}</div>}
                    </header>
                    {image && (
                        <div className="post-image">
                            <img src={withPrefix(image)} alt={imageAlt} />
                        </div>
                    )}
                    {markdownContent && <div className="post-content inner-sm">{markdownify(markdownContent)}</div>}
                    <Comments slug={slug} />
                    <footer className="post-meta inner-sm">
                        <time className="published" dateTime={dateTimeAttr}>{formattedDate}</time>
                        <span> {category} </span>
                    </footer>
                </article>
            </Layout>
        );
    }
}

// line 38 <Comments slug={slug} />