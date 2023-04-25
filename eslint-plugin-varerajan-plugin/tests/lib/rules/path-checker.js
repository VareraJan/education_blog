/**
 * @fileoverview feature sliced relative path checker
 * @author valeriy
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/path-checker"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  }
});
ruleTester.run("path-checker", rule, {
  valid: [
    // give me some code that won't trigger a warning
    {
      filename: 'C:\\Users\\tim\\Desctop\\javascript\\production_project\\src\\entities\\Article',
      code: "import { getArticleCommentsError, getArticleCommentsIsLoading } from '../../model/slices/addCommentSlice'",
      errors: [{ message: "В рамках одного слайса все пути должны быть относительными!" }],
    },
  ],

  invalid: [
    {
      filename: 'C:\\Users\\tim\\Desctop\\javascript\\production_project\\src\\entities\\Article',
      code: "import { getArticleCommentsError, getArticleCommentsIsLoading } from '@/entities/Article/model/slices/addCommentSlice'",
      errors: [{ message: "В рамках одного слайса все пути должны быть относительными!" }],
      options: [
        {
          alias: '@'
        }
      ]
    },
    {
      filename: 'C:\\Users\\tim\\Desctop\\javascript\\production_project\\src\\entities\\Article',
      code: "import { getArticleCommentsError, getArticleCommentsIsLoading } from 'entities/Article/model/slices/addCommentSlice'",
      errors: [{ message: "В рамках одного слайса все пути должны быть относительными!" }],
    },
  ],
});
