import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev, apiUrl }: BuildOptions): webpack.WebpackPluginInstance[] {
    const plagins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
        }),
    ];

    // для анализа бандла в продсборке раскоментировать код ниже
    // аналогичный код в условии isDev  закоментировать
    // plagins.push(new BundleAnalyzerPlugin({
    //     openAnalyzer: false,
    // }));

    if (isDev) {
        plagins.push(new webpack.HotModuleReplacementPlugin());
        plagins.push(new BundleAnalyzerPlugin({
            openAnalyzer: false,
        }));
    }

    return plagins;
}
