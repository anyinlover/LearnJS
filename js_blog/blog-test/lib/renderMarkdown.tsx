import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import unified from 'unified';
import markdown from 'remark-parse';
import math from 'remark-math';
import gfm from 'remark-gfm';
import footnotes from 'remark-footnotes';
import toc from 'remark-toc';
import remark2rehype from 'remark-rehype';
import katex from 'rehype-katex';
import stringify from 'rehype-stringify';
import rehypeReact from 'rehype-react';

type TocItem = {
  url: string;
  title: string;
}

type Props = {
  markdownContent: string;
}

const renderMarkdown = ({ markdownContent}: Props) => {
  const [htmlContent, setHtmlContent] = useState('');
  const [tocItems, setTocItems] = useState<TocItem[]>([]);

  const Toc = ({items}: {items: TocItem[]}) => {
    <aside>
      <h2>Table of Contents</h2>
      <ul>
        {items.map((item) => (
          <li key={item.url}>
            <Link href={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </aside>
  }

  useEffect(() => {
    const processor = unified()
      .use(markdown)
      

  })


}