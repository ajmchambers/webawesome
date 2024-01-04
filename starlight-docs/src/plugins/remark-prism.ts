import { highlight } from '../utilities/prism.ts';
import { visit } from 'unist-util-visit';
import type { Transformer } from 'unified';

type Node = {
  lang: string;
  type: string;
  value: string;
};

export default function remarkCodeHighlighter(): Transformer {
  return tree => {
    visit(tree, 'code', (node: Node) => {
      let { lang } = node;

      if (!lang) {
        return;
      }

      node.type = 'html';
      node.value = `<pre class="language-${lang}"><code>${highlight(lang, node.value)}</code></pre>`;
    });
  };
}
