// �@߅ʹ�� HtmlWebpackPlugin���� bundle �õ� <script> ���뵽 body��${__dirname} �� ES6 �Z�������� __dirname  
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/app/index.html`,
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  // �n����ʼ�c�� entry �M�룬������������Ҳ�����Ƕ����n��
  entry: [
    './app/index.js',
  ],
  // output �Ƿ���a������ĽY�������P����
  output: {
    path: `${__dirname}/dist`,
    filename: 'index_bundle.js',
  },
  module: {
    // loaders �t�Ƿ���ʹ�õ� loaders�����@߅��ʹ�� babel-loader ������ .js���@߅�õ����tʽ�����P�n�����ų��� npm ���b���׼�λ�� node_modules���D�g�ɞg�[��������x�� JavaScript��preset �t��ʹ�õ� babel �D�gҎ�t���@߅ʹ�� react��es2015�������ѽ��Ϊ�ʹ�� .babelrc ���� presets �O����Ԓ���t����ʡ�� query
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
  // devServer �t�� webpack-dev-server �O��
  devServer: {
    inline: true,
    port: 1989,
  },
  // plugins ������ʹ�õ����
  plugins: [HTMLWebpackPluginConfig],
};