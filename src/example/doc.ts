const doc = {
  "type": "doc",
  "content": [
    {
      "type": "heading",
      "attrs": {
        "level": 3
      },
      "content": [
        {
          "type": "text",
          "text": "Hello ProseMirror"
        }
      ]
    },
    {
      "type": "paragraph",
      "content": [
        {
          "type": "text",
          "text": "This is editable text. You can focus it and start typing."
        }
      ]
    },
    {
      "type": "paragraph",
      "content": [
        {
          "type": "text",
          "text": "To apply styling, you can select a piece of text and manipulate its styling from the menu. The basic schema supports "
        },
        {
          "type": "text",
          "marks": [
            {
              "type": "em"
            }
          ],
          "text": "emphasis"
        },
        {
          "type": "text",
          "text": ", "
        },
        {
          "type": "text",
          "marks": [
            {
              "type": "strong"
            }
          ],
          "text": "strong text"
        },
        {
          "type": "text",
          "text": ", "
        },
        {
          "type": "text",
          "marks": [
            {
              "type": "link",
              "attrs": {
                "href": "http://marijnhaverbeke.nl/blog",
                "title": null
              }
            }
          ],
          "text": "links"
        },
        {
          "type": "text",
          "text": ", "
        },
        {
          "type": "text",
          "marks": [
            {
              "type": "code"
            }
          ],
          "text": "code font"
        },
        {
          "type": "text",
          "text": ", and "
        },
        {
          "type": "image",
          "attrs": {
            "src": "/smiley.2e0954af.png",
            "alt": null,
            "title": null
          }
        },
        {
          "type": "text",
          "text": " images."
        }
      ]
    },
    {
      "type": "paragraph",
      "content": [
        {
          "type": "text",
          "text": "Block-level structure can be manipulated with key bindings (try ctrl-shift-2 to create a level 2 heading, or enter in an empty textblock to exit the parent block), or through the menu."
        }
      ]
    },
    {
      "type": "paragraph",
      "content": [
        {
          "type": "text",
          "text": "Try using the “list” item in the menu to wrap this paragraph in a numbered list."
        }
      ]
    }
  ]
}
export default doc;