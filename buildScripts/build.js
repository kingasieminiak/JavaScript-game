import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for production...'));

webpack(webpackConfig).run((err, stats) => {
  if(err) {
    console.log(chalk.red(err));

    return 1;
  } else {
    const jsonStats = stats.toJson();

    if(jsonStats.hasErrors) {
      return jsonStats.errors.map(error => console.log(chalk.red(error)));
    }
    
    if(jsonStats.hasWarnings) {
      jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
    }

    console.log(`Webpack status: ${stats}`);
    console.log(chalk.green('Your app has been built for production andwritten to /dist!'));
    return 0;
  }
});
