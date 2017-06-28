module.exports = function(type, prismicObject) {
  //console.log(prismicObject);
  var fragments = prismicObject.fragments;
  var datas = {};
  //console.log(prismicObject);
  Object.keys(fragments).forEach(function(key) {
    datas[key.substr(key.lastIndexOf('.') + 1)] = getValue(prismicObject.fragments[key]);
  });
  datas.type = type;
  //console.log('>>> datas : ', datas);
  return datas;
};

function getValue(fragment) {
  if (fragment.value) {
    return fragment.value;
  }
  if (fragment.blocks) {
    //console.log(fragment.blocks);
    return formatBlocks(fragment.blocks);
  }
  return fragment;
}

function formatBlocks(blocks) {
  var text = '';
  blocks.forEach(function (block) {
    //console.log('>>> Block ', block);
    switch (block.type) {
      case 'heading1': text += `<h1>${block.text}</h1>`; break;
      case 'heading2': text += `<h2>${block.text}</h2>`; break;
      case 'heading3': text += `<h3>${block.text}</h3>`; break;
      case 'heading4': text += `<h4>${block.text}</h4>`; break;

      case 'paragraph':
        var spans = {};
        var blocktext = block.text;
        if (block.spans) {
          block.spans.forEach(function (span) {
            var s = blocktext.substr(span.start, span.end - span.start);
            if (span.type === 'hyperlink') {
              var url = '';
              switch (span.data.type) {
                case 'Link.web': url = span.data.value.url; target = '_blank'; break;
                case 'Link.document':
                  console.log(span.data); url = span.data.value.toString(); target = '_self'; break;
                case 'Link.media':
                  console.log(span.data); url = span.data.value.toString(); target = '_blank'; break;
              }
              spans[s] = `<a href="${url}" target="${target}">${s}</a>`;
            } else {
              spans[s] = `<${span.type}>${s}</${span.type}>`;
            }
          });
          Object.keys(spans).forEach(function(s) {
            blocktext = blocktext.replace(new RegExp(s, 'gi'), spans[s]);
          });
        }
        text += `<p>${blocktext}</p>`;
        break;

      case 'list-item':
        text += `<li>${block.text}</li>`;
        break;

      case 'image':
        text += `<img src="${block.url}" alt="${block.alt}" />`;
        break;
    }
  });
  return text;
}
