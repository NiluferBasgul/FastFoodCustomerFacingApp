const compressedImages = {"./public/images/chip.png":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsTAAALEwEAmpwYAAADwklEQVQ4yyWTa5KbSBCEuYjPtXs338Kr8Wg0EkhCIBi9QLzpppvmjSTLXu+GY8MynRuDf1RURP3IqC+zSrlH3/+MTBEbM5/u1ISYakRtg1FVC+h8FdKpHtK/lmf6+kbp1E7o4sTo7EDoMhB0FZV0y6/EojU/l83n64//PijEqr7rUw9vagJ95mGtRlgvY2ibFM/rAH8tz3jehHjaBFDdHK8nCtXLx1qGBUxaY5cVOFCGqCo/KubMh6OzX66RD29mPmxNNuhmNug7Mag7Pqh7Psz3bFj71bAMysHKb4OVX8e+r+7DqWiG9Hr96VAC2opnxXoNpb2IcbIraZkMa4NiaWV4MWJohxzaSWDtV9B8AT2pYdAOu/KOQ/0N+7yBV7cyrIpHwCnyXkyUzYsnjWUC2+TSsgXWNsfMTPFqEUy3MVZuiZVXYh1WWEfVKGqLG5zmhrC/Sr8sJLs0Dy/xkddkomwWvz0zjAxri0HbcbyYCT4tnNHDp5U/ii92GV73FKrLoTkEbtnIuOvArp1knXgkLEDdkomiazGWywj6+2ZGgsWO4cVI8KyHmNkpVCeHdhbQoxoWv2EVcGz8RJ54DtI3Mr9UsruXD5J5KMtooqy0CEuDYL4lmNsUMyvFbJuOHupxAz1tsCHNiHmo73CrHsY5kElTgdRCip7L29fiwbiPpk4nylwL8LqJsTyKEVVzBKZmjBczhpn1MFkPW3zBlvU4tzccmZDHJJVxwWRxKVC2VHaX7CFEiDILJ8pn7YzpJhpRl24xIs532Th7R91mlzGIHW/wlnIcCcE+DFBeS5Q9k21PZH/JHiR0cK/Yk/K8CvC09rE48lFwk7RQTxwv2xTzfYb5MYOZ5NDPkbT9WNq+L09xIIuOyS93ga6nsi3TB4/OyEPvSfmkOnJqJVgcmdS834IG6WCSDnraYicu2PNSxv0FYSEkqXOwmsimJfJ64/LSUnlv2CN1j6jCYKK8WKmcWjFWXiU1T2AdV3gr7rDeQ6ju8iAaBG0vw6qU5b1DcRGyvWSy7amsilh+bbi8CfrgvovC8ybK+49qrvilR82wSdvBZP1YTv/P4Da3IeiuQ1RXA+urQfT5cPtaDNcvfOhaMtzqbGizePi74D+Z46AOwmdlfqDfp3YyvpYWCKh+Pp6KHuVwRAWXc/icIuYxUhZAFCHKIkKVRch8ByL0kB4PEO4ZP4r6o7KNqj9Ul8WrsKR6UhMz66geCbrPCnoglMZlTpOCUsJDIsqIZplHah6Tioa0SkPKXIeIs8f+zcvPP2/fPvwPa+pS1oMfLEsAAAAASUVORK5CYII=","./public/images/CucinaReverted.png":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAIAAABPIytRAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAEJElEQVQ4y2PQFWPAivQlGHXFGPVwyEIQOl9PHKRNU4hBiZNBU5BBU4RBU4hBT4JRT5wRn2Y9CQYdMQZlLgYlDgZrDZaCDLW+bpsYGyUHLV4VHgYFdgZtEQZ9CWyadUQYVLhBjGAX4e42o5Z64wldnj2N3lOyI3ISdJvrTJNC5YxlmdR4GTQEUDXriDIYyzJFBfDkZSpNnOBQUW7Slup2dWHaw03V30/OXFwXVpZh1NZoX11pkBgp5qjPoiMK06wnzqApwJCXIVKaq9KXrrOqRKMvWWNhgd0+d91LQcZno5xWZ2nvrZVYUqIys1CvLkOrq0/eVpNFSwikEexbMYbUeLF5pTqvlyp/3qzzbJHa2nKDI826L1f6PdlefHFZ0o4qnadlqm8mKByv1a4v0XI2YdEQgGsWZUhNlVgaq/MuWfntRNXjNdpLkpWPlQrua1A82qt6tlV1U7HRjTjDp+mat+MNukv07I2ZNeGa9SUY0lPF6gO0r5QYflrgebTTdXKK1NREkfn5Gkur1NbUi83J1Duz0vvOetfDU13LczWdjFgQmvXEGUrzpdrzHJfl21+uCViW4RgfJ1GQIttXJDuzQbY2XbYqU+9GU8ijpsBtlcG1hfouxqwoNidFCTRXGE7qsm8rse4otG0sNasqNy4vMCzJ1SstMCzLNZ6cZDEn13Zhi19vs54zXLOOKChJdZaFNRX59TX6tdXaTev3mtrj2d/m1lxpM6HFtbXcuq3SJj9Lp6bMrDRbv6nC0lSBRVuEQVcclkhWTS8tS/SZVJ+5Z1Xv7La85oKY/oqEsii3Od35HWWxXeVxTTkhM1uzV06v2byg1d9SUY2PQU+cEWSzgSTjyr7I6TX+izqj57XHLeuJmtMWPDHZaVK887o5uYs7omc1hlzZWTGh3O/MhvIZdYEp3mrKPCD3QuKZsa/ItSLZdnVf+OK2gIkl7guaAyYXu5eGmZfHmhVHmi5pD+orcp1T77tqUuTqiVGBFpKq/GCbQclTjCE5UCnbXH3ttJKsMPupjSm9VYmLJxSWJHl3lceWJvosn1LcXhIzvT2zNdC+NkrPQoNVG5rCwAFWVyvT5a6yfWreysnJe5eWntzSvn52Wayr/rH1TcsnZm1dWD2/K3PhhIzpIQ6TypXcbTg1+MCa9cQZtIQY/B24E+OEJpa5X9yYv3te4oHFqcs6I2uTHTZOitw8Ne7y1qLF7SHr+6ML09Viw/gMpZggeQOaSNT4GLSFGB21+LOD9NP99KtTLea0eTdk2rYVOJYkGLVk2zWm25TFGJnLc6hwMSByFbwA0RNn0BBkUOJhUOFlsNJkLiuS3rLTf9Jkw1AvTg1hBgVOBkUu9PIArWRh1Jdg1JcAeURLiMFOk8NQikmdD5TtDCSYwKUa3jIM2SFaQpD0h7MABACZu27uGCcBOwAAAABJRU5ErkJggg==","./public/images/sample_banner.png":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAIAAABM9SnKAAAACXBIWXMAAAsTAAALEwEAmpwYAAABeUlEQVQY0wFuAZH+AAlUfEhnijeAqDF4nRpeggJSeyRtfzx9gTJ0ekJ+eU6Gd0SJh3WgfzV0egBPewhUeglRdxdfhB1jiB9dgAAYW39xfZeId5B7eZI2a4wAVHxgj4dyoJRflJBejoxpkJNVhZVMiZscaIMAVXwGVXgjZoQWZIsVaJEKV3kAFVh5TXCNWmB8hYWaLm+NAFt+CmmTQWh7sHqJy5us14WVrmJhL2dwAF2EA1t8CV2BjrLCKm2LAVByCVRzAAFPcnSarqq0v6G4xCtxjQBbgj9wdaNHKNh5Z+GfjbuAdb5dQ7N6VD5xdgBdgxdoh0aAmi5rhwZTdQlWeAALVXZoi6CSkaJ/l6kcb48gZnuxb0bJbkzDhFnDfFLFa0jEiFrEcVC0bEYeaYAIYYQWYH8XW3sPVngQWHkAEVl6EFd2FFl4EGCBAGCHWWxp4GRAqXhMvnNLyHhX13FWrndOs35XymtFVHBvBGWLFGGAF1x9F15/EV5/SvWTPj+u0ZIAAAAASUVORK5CYII=","./public/images/banners/1.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAKAA8DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQYH/8QAJRAAAgEDAwMFAQAAAAAAAAAAAQIEAwURACExBhJBBwgUIlGR/8QAFAEBAAAAAAAAAAAAAAAAAAAABv/EABsRAAICAwEAAAAAAAAAAAAAAAIDAAEEISIx/9oADAMBAAIRAxEAPwAq7e3joq1mpca18uFwh0u4ih8hEauQcAAhRtnyOcbazn1d6cj1IUZYkSfb7ValWiiPUd6f22UgNyTjkZ58aRj329tZqHdeLie0uq5kvsPwb8bDUp1POnTZy05kyRJRVyq1arOB/TomvJcT661UVlhpFBa9n//Z","./public/images/banners/10.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAGAA8DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAIG/8QAIBAAAgICAgIDAAAAAAAAAAAAAQIDEQAEBQcGIRQikf/EABQBAQAAAAAAAAAAAAAAAAAAAAb/xAAbEQABBQEBAAAAAAAAAAAAAAADAAECESEEUf/aAAwDAQACEQMRAD8AvoWLT8xlOsqvowRQfWNUVgpUA2Lsj9ObDtTr7gOP8Tn392P5Muu6kEIAQWdVYqRRF3Zo+/eMYbFzjeyVu+pCXoI7xjeYv//Z","./public/images/banners/11.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAKAA8DASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAUGCP/EACMQAAICAgICAQUAAAAAAAAAAAECAwQFEQYSADEhBxMUQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EAB0RAAEEAgMAAAAAAAAAAAAAAAIAAQMREhMiUcH/2gAMAwEAAhEDEQA/AJH6XYfjmL40XsjHZWKzDH+TNdBJTadpAq9wGCDtsKO3wN+/GXLMpg8fM3JGpPTv1E7QxpckgM4kKxq7/b1sNHs6T5BTTEjzP+GyeSp595KmQt13JZy0UzKS2/ewff8AfC/lsrd5W89zJ3bMqAlXlnZ2Un3ok/G/35CUUm2s+PXiYWFhql//2Q==","./public/images/banners/12.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAKAA8DASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABgj/xAAkEAACAgEDAwUBAAAAAAAAAAABAgMEEQAFEgYHIRMWMTJBcf/EABQBAQAAAAAAAAAAAAAAAAAAAAX/xAAhEQACAAQHAQAAAAAAAAAAAAABAwACBREEISNRYZHR8P/aAAwDAQACEQMRAD8AJV906Xu9Q1fcVOpJHVVwoUScp5HVQhdGY81TiXI+MsRk+RpxcXpxo9tj3i9tuxxX6ptVjY9OGVIWb7FAc4ZkHE4AK5OBqQNhs2Xn4vYlZU8qC5IX+aa96LNm/wB2t2lvWJbUiw1VVpnLkAV48AE/mi20svm1GE2+3h1FYlw0t0qAJ5v1l7H/2Q==","./public/images/banners/13.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAGAA8DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIBAAAQMFAAMBAAAAAAAAAAAAAQIDBAAFBhEhEiIxgf/EABQBAQAAAAAAAAAAAAAAAAAAAAb/xAAcEQACAQUBAAAAAAAAAAAAAAABAgMABCFRYRH/2gAMAwEAAhEDEQA/AM2xu5YhZmpjMXH3Y8pLRcQ6hZWlv02NBSvv7z6KuYNOuF+ucCHZ3lwpcxLj0Z5TpSWQlPsPIAkbGxwd5ulKNR3c6KxDnHTqkpt4XKhkGQfcDY5X/9k=","./public/images/banners/14.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAMAA8DASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAgYHCP/EACMQAAEDAwQCAwAAAAAAAAAAAAECAxEEBSEABjFREhMUQXH/xAAVAQEBAAAAAAAAAAAAAAAAAAAEBf/EABsRAAEFAQEAAAAAAAAAAAAAAAEAAgMEIRKR/9oADAMBAAIRAxEAPwDIlgtjlzqy2JDaBKjjk4SnJAkns99aLcFKqmfSHIClCQE5Efurzc9tWbatopKW00aUl1v3LecUS6VKRBIVgjBIxEZjk6SK2xUFzW58wOuKR4hKvODAAA4wcfehMtdPOYqMlDiMEnT4v//Z","./public/images/banners/15.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAKAA8DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQQH/8QAJBAAAgIBBAIBBQAAAAAAAAAAAQIDBBEABQYhEiIHCDEyUYH/xAAUAQEAAAAAAAAAAAAAAAAAAAAF/8QAGhEAAgMBAQAAAAAAAAAAAAAAAQIAAxESgf/aAAwDAQACEQMRAD8Ai+Q+e77ByHcoqduzVrQzGGFHlaQyElcssbnHioJIA9e1H70RsvKJuU2LtDe9xfbrCRo8aGJUhmTOAz+uVbxx+Bwx++mPqgijrNs9utGkNg1hmWMeLn+jvWH1yZJ1aQ+bMoJLdknvvRuMthOxQ2K1YXn2f//Z","./public/images/banners/2.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAKAA8DASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAABAUGB//EACQQAAICAQMDBQEAAAAAAAAAAAECAwQRAAUhBiJREhMjMVJh/8QAFAEBAAAAAAAAAAAAAAAAAAAABf/EABsRAAIBBQAAAAAAAAAAAAAAAAACASFBYdHw/9oADAMBAAIRAxEAPwCL6Zo7Cm016kdp5SkYjaGwZHEuR2EgcfbHjHAOnW2bXC4rUhZIt2fU9hawUBgucFgfBAGcY1n9FVfpuZnUM0ViVIyRkoobhR4H80RX+PpuBo+w2bRWcrx7oCEgN+sEA86MVYuJS1exo//Z","./public/images/banners/3.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAA8DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAQMFAAIDAAAAAAAAAAAAAgEDBQAEBhEhEhMxQYH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABwRAAEDBQAAAAAAAAAAAAAAAAEAAhEDEiKh0f/aAAwDAQACEQMRAD8AwbB4TArS+jruQmSklNtHXGCthRoCXitueS75vex2i6+EqseI4LPg63ZnLQ94T5K3psbhn19XqD0fpE1+0pUwpkmbjriYOxiF/9k=","./public/images/banners/4.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAKAA8DASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABwT/xAAkEAACAgAGAgIDAAAAAAAAAAABAgMRAAQFEhQxBgchIiNRcf/EABQBAQAAAAAAAAAAAAAAAAAAAAX/xAAdEQABBAIDAAAAAAAAAAAAAAABAAIDERMxEiFR/9oADAMBAAIRAxEAPwBx8w9uPouo8bK6dzYkUiSaNHansDYoHZB7sirvoHFfh3sLUdUy3KfSjxZZT+YB96/QEExn5K39dwoA0ME0eXgl9rFpYI3ZZSwLKCQa7/uEiHLwIVmSCNZLK7wgBrur/WDWsmy8zIa8oUmH4Gwhoj7I3Zva/9k=","./public/images/banners/5.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAGAA8DASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAkEAABAwMCBwEAAAAAAAAAAAABAgMEAAURBhIHEyMxQVFhcf/EABUBAQEAAAAAAAAAAAAAAAAAAAUG/8QAHREAAgEEAwAAAAAAAAAAAAAAAQMCAAQRMQUSwf/aAAwDAQACEQMRAD8AkdAT7VboKi1bGpHIhqdDjzfUU+c7exwEJ9YyfNRGtOI0+5IER+3QCyQlSShrYtJH3JyMflKVP8c5jHsEpE69pkLgLHtgZzuv/9k=","./public/images/banners/6.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAJAA8DASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAwQGB//EACgQAAECBAQFBQAAAAAAAAAAAAECAwAEBREGBxITISIxNFFBYXGCwf/EABQBAQAAAAAAAAAAAAAAAAAAAAT/xAAdEQACAgEFAAAAAAAAAAAAAAABAgMRABMhUaHw/9oADAMBAAIRAxEAPwDLsA4CnK5JFdRqTVIQQFtJNnHHBex5Aoaeote3r4hjMbLar4I25gTqKtKqVtreZbLelfiyjxHuIkH+7b+RBa336Pt+QQQyrJZfbivHHa6laC95/9k=","./public/images/banners/7.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAKAA8DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgEF/8QAJRAAAgEDBAIBBQAAAAAAAAAAAQIDBBESAAUGMSEiExUyQVFx/8QAFAEBAAAAAAAAAAAAAAAAAAAABf/EABoRAQADAAMAAAAAAAAAAAAAAAEAAxICBGH/2gAMAwEAAhEDEQA/ALw/ifHds26hqnEdfXzokhmcF2Dlbk36RQ3qAo7HnWfyimotigklo2+jThVwngAVyGI+9PKG4/Nshb+6ObPPNg8fzSYBcguRtfI+bfvR3d5ppK2ZJJXdEPqrMSF660S1LfnXsSewNGnjP//Z","./public/images/banners/8.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAKAA8DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgAI/8QAJRAAAgIBAwIHAQAAAAAAAAAAAQIEBQMABiEREhMWMTJBUYFh/8QAFAEBAAAAAAAAAAAAAAAAAAAABv/EABoRAQEAAgMAAAAAAAAAAAAAAAECAAMREiH/2gAMAwEAAhEDEQA/AH9rI8vbpm3JurwyZCsuSNllIynoeAQFCj44B9R/TqrL1J13kmSo5x9+BCW7m8EqBxwDwSW/SPzWbN9Xl1i3rJTFb2CIsvKFVZLgAdx4HOlO07i3k7dsEkWs7MoC9BkkOw96/Z0X2Sl9xxLBLHCe5//Z","./public/images/banners/9.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAKAA8DASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQQGB//EACMQAAIBAwQBBQAAAAAAAAAAAAECBAMFEQAGITESBxMiQVH/xAAUAQEAAAAAAAAAAAAAAAAAAAAF/8QAGBEBAQEBAQAAAAAAAAAAAAAAAQIRABL/2gAMAwEAAhEDEQA/AG9kyrvbHG6rxdYZaVVRKlFXJEai48W5OFOGAOByOvvk+o0SpuC0Vrcm67dEiUqgq4MYMkliw+fuBj2DnACnIOdS0N3Xay+LsPKoQ2D313rNd7zpqXiRSSZIWmvIUVCADn80MQte95q1uqadTO//2Q==","./public/images/card-type/amex.png":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsTAAALEwEAmpwYAAABFUlEQVQoz13RS0vQURAF8L872/UhDAza1CY3qdBDwWUQQuZKIi3tiWUSGPmICCKpLFdtipLa++nOLwYmEC8M87jDueecO2Ach0m+J9nHY3zAD3zGX3zEJ/zBbpJfqN3f2MYxrmIYcBOzuIeZJKu4jjk8wCZuJJnHrZ49KoAkK713F9P/AXfxBAv4imedN7CFb53f4G2Sl/14xR186Xo6yTAkuYCzLf08Jpp+Rd3NJrmIKVzDZVzBWPeXMIlzGC2Gp2MZJft+y1vCWpJSsdK5JK93VP2u918Xw5ECKrpJzmC+Qd+f8GexQLtfSlKeryc5SLLQn3gbO0OdE+xG2runeIW9/pRi+rC9Lc9e4HmSo57/bLab/wCgwdMSUZTR+AAAAABJRU5ErkJggg==","./public/images/card-type/diners.png":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAAC5klEQVQoz3WSzYtWVRzHf/fSpC4aELGEQB0sqpmQdExksFCUgoIhzIiKsaWo0MuqVUG0Elq6U1y16w9oORtrNzJjNOP4zHOf+zz33PP+/nKfmTG8cgcLYugLZ3XO+fA53/MDeJb79woY9QVwYgAPNWy1BgQ3c4zKDykV7xnjvvM+3rHGf3Hn5mIuuQVnQxZChJQa2JW2bWGwRmF10UPbapBcf86omK3QaG8zDi8QWk+GEG6llNoQ4u+kUgc7qNU+a5r/ASppcyUNCKYvciZOKK2mpVTvb//dgDHmancmhHC7aZrW+/hr2z7p7mXdq3alKvgOtFuC648H1cZECKHnnPuhMwghbHvvL0upjneWKaUxQeqoYAYkt9kuIKcGOHbAidvLmfpAGzUZY2ydc99ubm5CjHErxvhjUQwOPQM+EczMKulASZf/B/bH4n1YW0Yw3opZGofO8NNev7fHe3/XWvt9B/Te942xU9ba+dSkNsZE+g/JJCp3PjIb9SkMNygAqXjGsMwJEhnDKhe069AcE1xdXvlraQ+q0cFHvQKKYnBgeXllX4yx6Ayt9tdTTDAeN/nmdvNvXR0QGJZAawl1KSAkn1nrgFP9luD6M87lSUrZjLXuUoxxLcbErQkLMUR43G6Bljb/B2aUywFX/AjF4hxF8g004PtXl0YTdcmBUwVGj5+jWB7zwU+nJl1wNpwZbtBX1x8MD1cFPc2JPNXJoAE7pLh9UzIDwIl+Wys3L5g+pbi5hkd8hiD5Lq3lTNnDr5NKnKBIvnPvtz/3W2UnJDcLv/y8mFMsXuFUfsmwehFX7KwS9ivJzGsgqD5tlPuIYTWthP1JUH2tHvJ5Je1dVNKLDKurgupLFMlvrPYvKWFvrC4Nn69KOkVq/rXR7gqp+Q0l7ALD6pOuv6OcyPNowKYIEocJEmeGfTzVDXfxEJ9EQzpdrKOXR306tzOjVB8pe2SufISP1xWbRSU/Xw3o2W5/fWV04Cky7oqMs3tx/AAAAABJRU5ErkJggg==","./public/images/card-type/discover.png":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAsElEQVQY00XQPyvFcRTH8d/iGXgAtwwIxSp2YZP8maSU/Buku92bzDJZJCn7pTApk4fhuXxe+ta5+dTZ3r3P55wuyTb6mMMKDrGJBdxgBo0ZYB1TmMdJsQc4xywmOzwW+IJX/GAHT1jGkf/84hm3eMclHvCBY3RNeJ9kGqMkTbqX5BufmKgm44zwhuuaM9yVcGMsvKiNa9gv8Apb1Xo1yRBfdf4iesW2V51iKcluE/4BoJASOHVFaXoAAAAASUVORK5CYII=","./public/images/card-type/mastercard.png":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB60lEQVQ4y3WUz0tXURDFv1ZWiwhsUUKE2wgXrnMRpObCTQuDaFEUuogswoRKKBFKIeiHC91VFEQU7YJoowv/gRBahITWwiA3YkV99fu+5xMjMzY8bODy7ptz5rxz5977KkADUPHRCbwCvgLfgWngEtAI7AEGJc1KWpa0CDwH2lN9Q0y2A0/YOmpAHzDA/+NRiIbgSwcKF1AaI8A3SZ+Au86rGyap5nN7mQrBU55Yd4EQtngHvE5OngKzmSOpnvidJvjegZonlYRtKctJ8AswmV0mMxYvTHCpJBSkH8CDVGyxBkwAVecEP5a9VJG0WgLD3Qpw37HC8XD9K0yk/EatOZz3XL0k+Bt46P0J1z/dYVFaVTicM8HHDq4nUhTYzs2nHn5I/CJ9fM2f4ybYmnpUK/VsLpbtMSZpobQpYcTacCTOYT//mhJnseqpZ8AM8BZ447mqc4pU1xvncJu00cuTwOctbsEf4CjQnZZI7IWkj0BH+abEaPTC65JuA6eBfQk/KOmspFvAEHC8VL8puB9oAXZI2pkIe4E2YJfPdxsnfgRuoMkxc3nAgEPWbOAmMArc8Pt7T5LNh/3dbshld3YeuAbckTTkedNoMcFm4BhwGOgBrlqBpCvACeAMcAG46JwuFzwnadBPSbcbav0Lq8WPkiVfmggAAAAASUVORK5CYII=","./public/images/card-type/troy.png":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsTAAALEwEAmpwYAAABRklEQVQoz53SvUvXURQG8F8mkQkRvYFLFBQREdFgQTU0NAQJTYrV1GSDghAtDUFQTWZLbUZt0dT/UKARNUVoU5PU7NBQ9Hzi0vnid/bCufe8PDznOYc7SDJI8hmrGGzBtvXjdj3Ab/zBXUzgKY7hPvbjLB7jAo7iEF5iroha7jkeNnXfIMlfLOG1/+dXNbpV8RoWK3e1hxnGi4oXGvtkBber26eKW8cjWCn1h3Gxak/wtvyJJBtJ1pOMNIJHVTidZDs2Sk23l6/40XaNfYV9hvnyP9Q71+1wqRLLmCr/TRE0u9Ob4Ev5l3DS5llNMtwRnsD7Gu1GU5TkZit2pElmMY13hWn5XfhehNcrd2VQS92DAxjFTozhIHaUDWF3YRvmHl4V2cdqurcjHKtlX8M5nCm/KTmf5FQD4jLGk8z0Rv2Z5Hj/H/4DN2dmAzT68GEAAAAASUVORK5CYII=","./public/images/card-type/unionpay.png":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADqUlEQVQ4yzWTf0yUdRzHP89Dfzi0X0y55xxlbeGmzILwngNFCzjQ1cxxY81GY60syphKHdyP5znvB88NYQu9IAkIFE2dxNSQfjHUm24E0q6ZySIM7nlCJbSUnA3vju+7PUf98d73v9fn/d3eL9IMIqcZRNIMphWawTSmCiImBXH+Vmo2864uBVlkUKEEskigAgm0WQbt9oNkBeSq1cPIpcRJqgVJymnS0nJ5LW0dacvNbZrRjIjRHLtpWIvhtA1ILnCALG5wCaAMelEC96YPvDcAXlJ0wAJUUlgC6FJu040cK82UVT2kPp45qqZkYiIla/7O0izWumoro2IPkopk8EXuRJKK3aD3PSCHF1TtAS8HwMuK/sb+g/fSGJGe9OmSirk/Xq3EjdId7N6aYla+4hWQxQPKq1nIejtofRXMzZ1wD4RQeqwH9IEMqvEwqvbEyOEDJyl2GqdFdI2WlN0NHsTtnd743aYuNvuOE+9tr8fzuz9DdkUzsnccQF5lGzIdLWi4MIgvR8fQ/dNVmFs6kdnUztZ+0sGMe/frBwoosiSD1Mee23/veC/u7G2JzrYeZ/dDQxga1XAidAXnf/wNF69MYuhnDWd/ncDXY+OwHv0CTYOXMKxNsebvR+Yv/X4dTzZ8/CdZy1Ooj4jUlKzB6S3bccteH/8rp4R9+7oDm+wHkW/rwBb5CPI/7EDerjbkNnbCcugoaJcTG9q6sPVIN8q6T8XfPtUH2mkfIOKJVINJ0ATx78ijz+La4gw2+0gGs6WXgPLdIFMVnilvhOfQWdjav8Hh8GW80dMLV/85dIUvQzl/kQUHh6OLffUgu6+OqvcQaYL4smowQTWambo8h00LJmw2V4Be8oPW2eDs6Ef/yDjOhH/B8NQUqr7qR2gikgDqX37txMl5qt6DRZ46K7lqEw19miBCFcTolMHExow5ML5gA23ygHJtCBwL4fB3YfT8cBW+cxfw1skzCF+/ifaRMAtNRFh64wGQ3Xv/YV/DEwtAwTSgGUREBDE+k5rN+p6yMCqUGFlkRvlOlratga0s38fW+FvYymALWxr4iGUEW9nq4KdMqNsXT/bWg5z+cGHH51wCqAmmf3TdJgQzZpdlIbDKCn3Q/P92bHSANtpBle6FQTt8iVFTjT5wX4ycft2UICcpRFJtEqkGsU9vOCmIczOp2dHTTxdFk/MdcbLIMSqUHnBFcpS3yFH+XX+McwfinKQ84OVAlJcDc9yCfmFy1QqJdi6F+xeb+CuyShv2RwAAAABJRU5ErkJggg==","./public/images/card-type/visa.png":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAABfElEQVQoz23ST4iOURTH8XdmzPhvJYnFWJo0FqykSKJsyEpkJBaUzWxG2dlRLNXMRtmxEytJqIkFG6YoJbZKsSCU6ffR5bzTY5qnTvfcc8/ve+9zzulhW5KHmE2yHIN4himcxBzW4Ip/3yccQA+jSV6g6Q9hd68OLlfyMpxvTpJxPMHTJKcqNolbmCjdjdJ9xeEkm/8Ck0wkmccufMM0RgrSLjhRwmsFajaW5BeuFnB/i/cPD1bwOX4W7FhBxurSS7WfLc0dvMP2ih/vArdivg6mKvYAH5KM4hzW4n7lHKn1c5K58ie7wJb8vpoxXNZgF7EPv/E9yY8SziR5gx1J9uJL5S4Am63HqvKHk2xKsrL2A9hS3e5V3khHu6Ia+h+wb4PdfZKN2JPkbHX1MV4meYuPaOsrnFkMHOhAWt1OF+AuHuFejcwMbuJ2xV9XDa8v9cI25G2YL+AoxpOsTtJ9cW/RH7R1Q5VsAbiuBnNn+UuVYahZkqG+X9b9s94fIWLeggXi7poAAAAASUVORK5CYII=","./public/images/crust_sides/blured/chilly_peppers_side.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAKAA8DASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABwX/xAAkEAABAwMDBAMAAAAAAAAAAAABAgMEBREhABITBhQxgQdBUf/EABQBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAAAAQIDMUL/2gAMAwEAAhEDEQA/AB/r5cY1BXeVNqO8ytcd1tpPKkKtfak3IzjOfeo7dXjsxkwRTQ840lLZ5HN2ACfAFr396YW4kU/KtThmMz2ygoKZ4xsOPtPjRl1g01HqUlLDaGkpcISEJCQBc/mj42cibWs//9k=","./public/images/crust_sides/blured/fresh_oregano_side.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAJAA8DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQMH/8QAIhAAAQQBBAIDAAAAAAAAAAAAAQIEBREDAAYSITVyUXGx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgX/xAAZEQEBAQEBAQAAAAAAAAAAAAABAgMABRH/2gAMAwEAAhEDEQA/AAIR/sPLkMY6nW7lxiQRnzKerQARfHiALWCCCSbJsih1qUbuGFdyjiGiphT0JQnI0buWq0rSOuQIIuqBN/Q+BrDYjzCPfT25/MsPRf5qdPmBVaFo8tsYQZPj3//Z","./public/images/crust_sides/blured/garlic_butter_side.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAKAA8DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUI/8QAJBAAAgEDAwQDAQAAAAAAAAAAAQIRAwQFAAYhEhMxQRQjMlH/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABsRAAICAwEAAAAAAAAAAAAAAAECAAMEI0Gx/9oADAMBAAIRAxEAPwCFisPe0LGpbUslZYuxumAuri7r/JIRiFkL4DLB98ARGgu8NtbOq7rr2OE31TNNEZ3qPHbdgwEjo4EzPj1pxvRV+un0joSyLoscKxqQSP4SOJ1na1RKuWuu4ivDH9CdSGOr1Gw8Psdh2qh6J//Z","./public/images/crust_sides/blured/olive_oil_garlic_side.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAKAA8DASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQMGB//EACgQAAIBAgUDAwUAAAAAAAAAAAECAwQRAAUGBxITMUEhIlEUFTKBkf/EABUBAQEAAAAAAAAAAAAAAAAAAAQF/8QAGxEBAAIDAQEAAAAAAAAAAAAAAQIDABExBBL/2gAMAwEAAhEDEQA/ABtzHQ5/GfsWnoY42VyzfUEcUChXMacfPf3Me/xjOtw8viSWPLctrBUzRjgaRkWPpBT6rcmxYe0mw8+cP2dqJ00zqQJPKoioYnjs5HBjJYsPg29L4kN4qicajroxPKE64PHmbfjbt+h/MRvJbGV06Q0QQ73ZvFzi/Ar3P//Z","./public/images/crust_sides/blured/parmesan_side.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAA8DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAYH/8QAJBAAAgEDAwMFAAAAAAAAAAAAAQIDAAQGBRESBxQhIjFBUXH/xAAUAQEAAAAAAAAAAAAAAAAAAAAF/8QAGREAAgMBAAAAAAAAAAAAAAAAAQIAAzER/9oADAMBAAIRAxEAPwDRrG8xjK9Dh0u57WPSUKxTGOJVuSiDxGzFeSkkDl81EdU8dwCB7K4xxZ9MlYFJrexvH2Kbel25HYE/Z9/2lKHSx0sYA5FWqRgp5s//2Q==","./public/images/crust_sides/blured/sesame_side.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAKAA8DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQIE/8QAJRAAAgEDAgYDAQAAAAAAAAAAAQIDBAURAAYSEyExQUJRUnKB/8QAFAEBAAAAAAAAAAAAAAAAAAAABv/EABkRAAIDAQAAAAAAAAAAAAAAAAABAxExE//aAAwDAQACEQMRAD8AcsVl2ftnbpvF4aMiJuHm1QAV3+scft8ZOSfA86itslvv1Itwltz0U1Q3EmAqFI/XKDoCR3zk9R10tboIaoQPVQxztApMRkUMY/znt/NZaxmAmAYgc4+dCe2KhM43tn//2Q==","./public/images/menu/dinner/default.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAKAA8DASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQQFCP/EACQQAAECBAUFAAAAAAAAAAAAAAECBAADBREGBxIxQSEiUWGx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAaEQACAgMAAAAAAAAAAAAAAAABEQASAkGB/9oADAMBAAIRAxEAPwDU+YNbe0GjF80ZOXQQFFSW8vXMJt2gD2fluYdwc+qdSwyxfVhiWD6dL1TJB3R1Nr+CRYkcE2israDEDE2s+aiwkp//2Q==","./public/images/menu/panini/default.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAKAA8DASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAEFCP/EACEQAAEDBAIDAQAAAAAAAAAAAAEDBAUAAhExEiETInGh/8QAFQEBAQAAAAAAAAAAAAAAAAAABQb/xAAYEQADAQEAAAAAAAAAAAAAAAAAERIBAv/aAAwDAQACEQMRAD8A0vLTazJ6W1kPIrgAHzJIi5M9Z3kfKcNMqvnhbKRcg3As5hZVDimdeuc77/KsHdFTkdU6FrxJH//Z","./public/images/menu/pasta/default.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAKAA8DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgIH/8QAIxAAAQMDBAIDAAAAAAAAAAAAAQIDEQQGMQAFEyEHURIzYf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAHBEAAgICAwAAAAAAAAAAAAAAAQMAAhJBESFR/9oADAMBAAIRAxEAPwDafPN433s7FLTWfRFsLKjUVXDyKRBgNgEGCckxgiPekvhy6bhuS3kPXFtRoqtLim5CSORIHS4OO+j+4kYdLbbc+xtC4x8hOqSlKBCUhI9ARoQqwYb5deSizqFQXgORvc//2Q==","./public/images/menu/pizza/bbq-chicken-pizza.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAALAA8DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABwID/8QAIxAAAgIBAwMFAAAAAAAAAAAAAQIDEQQABRIHIaEUIjFBUf/EABQBAQAAAAAAAAAAAAAAAAAAAAX/xAAdEQACAAcBAAAAAAAAAAAAAAABAwAEERJhwfAh/9oADAMBAAIRAxEAPwBgk6hYHpY5sXa9znEjsqqsVkVVk1dDv9/h1nL1N2ZIDMMLNmQOEJiS7NX7eXG/GjGCWWOGZY5GURzIEo1xBWz51aXuDRR5rPOrQliGY/Icd9CB0yW+kW9jcMFUsE1obuzqP//Z","./public/images/menu/pizza/breakfast-pizza.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAALAA8DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABwID/8QAJRAAAgECBQMFAAAAAAAAAAAAAQIDBBEABRIhMQYTYQcjQVFx/8QAFAEBAAAAAAAAAAAAAAAAAAAABf/EABsRAAICAwEAAAAAAAAAAAAAAAEDABEEEvAx/9oADAMBAAIRAxEAPwBmh66op6VZ6XLcxlR5CigIORyTYmw/fOMa31IyilhWU0VdKpfR7aAknSDsGIvz4+frBZFPNDBN2ZXTtyoqaTawK74qJBWmKKrLTI0JchmO7a+cCh+SW0SNe72MFOME3R2n/9k=","./public/images/menu/pizza/capricoza-pizza.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAALAA8DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABwID/8QAIxAAAQMDBAIDAAAAAAAAAAAAAgEDBAAFERITIUEGcRQjwf/EABQBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQEAAwEBAAAAAAAAAAAAAAABAAMRBBL/2gAMAwEAAhEDEQA/AHKz+VR7rGJ+DBl7aFp+xRD32vqsL/5vCsiN/Mt00ta4w0gl11yn5REzJkR2Xth5xvbeAQ0ljCKOVqwI7krbc4zfEmVNUIl5JDTmhC/pbsU8xZo5yrQdn//Z","./public/images/menu/pizza/chicken-pesto-pizza.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAALAA8DASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAwf/xAAmEAACAQIFAgcAAAAAAAAAAAABAgMEEQAFEhMhBjEHFDJBUXGR/8QAFAEBAAAAAAAAAAAAAAAAAAAABf/EABoRAAIDAQEAAAAAAAAAAAAAAAEDAAQREiH/2gAMAwEAAhEDEQA/ALRTdc0NRTb9NQVrIWIAYKt7d/c/X7gsx8Q8soIkebL65tTaSsYViCBfjmx74lCSOkMuhiuzMgjsfRdb8fGEiHntqGrLSoYSxUkjnX34wGHWi70jmLlNcJ3D1P/Z","./public/images/menu/pizza/classic-cheese-pizza.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAALAA8DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABwID/8QAJBAAAgIABQMFAAAAAAAAAAAAAQIDBAAFBhEhEhMxFCNBUdH/xAAUAQEAAAAAAAAAAAAAAAAAAAAF/8QAHREAAgEEAwAAAAAAAAAAAAAAAREDAAIEEhQhUf/aAAwDAQACEQMRAD8Acsm1TBm1Zp6FG0YwxX3Cqcjz8nGOodbU8j7Qu5bcJkJ2EXQ++31z+YIYbE9eCfsTSRduVFTpYjYFecVEPXGKK2zzI0Jdgznlg/nANs2ZyC7hp4u6WMOOImi6/9k=","./public/images/menu/pizza/default.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAALAA8DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABwAB/8QAJBAAAwACAQMDBQAAAAAAAAAAAQIDBBEABRIxBxMhFzJBUbH/xAAUAQEAAAAAAAAAAAAAAAAAAAAF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAQIAAwQREv/aAAwDAQACEQMRAD8AYPqP0VJJRsXqKToWCH2d77fu8E+OWV6k9GhjLkLhZ9pNQz2kxvYG/jZAPn+8K51ecqqBNlnVUQPNXCqyjuA2Drf5/fNxZzygmNWUxFptQzmgmpbuA7tLob18b4UMiwtqImhAvU//2Q==","./public/images/menu/pizza/hawaiian-pizza.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAALAA8DASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAwf/xAAjEAACAgEDAwUAAAAAAAAAAAABAgMEEQAFEgYTITFBUWGx/8QAFAEBAAAAAAAAAAAAAAAAAAAABf/EAB0RAAEDBQEAAAAAAAAAAAAAAAEAA/ACBBIhMRP/2gAMAwEAAhEDEQA/ALZt/WNa/V79ChadOZTEjKhyPX3P5ot469o7SsZubbcJkJAEXF84AzjyPn61IgzxwTlHZTFKipxOMAr50sKC8Yo7ZaZWgLMGY+SHGDoOl669t1DGTqYLVsGdA5ScX//Z","./public/images/menu/pizza/la-bianca-pizza.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAALAA8DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABwEE/8QAIxAAAgECBQUBAAAAAAAAAAAAAQIDBAUABhESIRMUIzFRkf/EABQBAQAAAAAAAAAAAAAAAAAAAAX/xAAeEQACAQMFAAAAAAAAAAAAAAABA/AAAhEEEjGxwf/aAAwDAQACEQMRAD8AdbFmZL1TPPbbdVtGr7PIVTU/pxnzFnOlsKQNX2yt8xIVY9rHjTXTkfR8wR0tZV0kE/a1U8GyZFXpyFdAV59Yu+S6PEtwllqQ0BY9RySSH94GD9QW4JGJOaTKFCzdO/K//9k=","./public/images/menu/pizza/much-meat-pizza.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAALAA8DASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAwf/xAAlEAACAQMDAgcAAAAAAAAAAAABAgMEERIABTEGIQcTFCIyUdH/xAAUAQEAAAAAAAAAAAAAAAAAAAAF/8QAGREBAAIDAAAAAAAAAAAAAAAAAQADBBIh/9oADAMBAAIRAxEAPwC0UfXNBVQiSloa1gzlVVsFJI5t7tFuHiHttDTwzTbbuGMvxCopJFuQCfzg/WpOrvHTz4Oy+VKipY2xBW50sY9e0UdYzzq0BdsnPchx3voUuyW3qaxdqxing7T/2Q==","./public/images/menu/pizza/pepperoni-pizza.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAALAA8DASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAwf/xAAjEAACAgEDAwUAAAAAAAAAAAABAgMEEQAFMQYhMgcSUWGh/8QAFAEBAAAAAAAAAAAAAAAAAAAABf/EAB0RAAIBBAMAAAAAAAAAAAAAAAEDEQACBBIhcaH/2gAMAwEAAhEDEQA/ALNB13QnrrLW2+86u5VVIRSccny+8aG36j7VWqR2X23cCkjFQFRST25Az3/OD8alaTSxQTCORlEcyKgB8QVydJHm+IYbjNNGYC3tLHkPzoK1+WXwSNeuaZKcUImDt5X/2Q==","./public/images/menu/pizza/pollo-alla-gorgonzola-pizza.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAALAA8DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABwID/8QAIxAAAgECBgIDAAAAAAAAAAAAAQIDBBEABQYSEyExURVhkf/EABQBAQAAAAAAAAAAAAAAAAAAAAX/xAAdEQACAQQDAAAAAAAAAAAAAAABAxEAYcHwAgRB/9oADAMBAAIRAxEAPwB2yDUa57TyS5XQVDKjbbTOsff6T9eMY6n1fBpwQfJZbVXmJCrCVcm1r2uR7HrA7DUVEEE3BPLFxSoqbHK7QV78YqMHMWiWueSoDQFjvckkh+u8DB/YLYJEbbNKFKRwn3b4r//Z","./public/images/menu/pizza/prosciutto-pizza.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAALAA8DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABwID/8QAIxAAAgIBAwMFAAAAAAAAAAAAAQIDBBEABSEHEzEUQUJhgf/EABQBAQAAAAAAAAAAAAAAAAAAAAX/xAAaEQEAAgMBAAAAAAAAAAAAAAABAAMEERKh/9oADAMBAAIRAxEAPwBjHUHa/SrYSlf7buVUFVBJHn5fmoudSNorVknNC+6MxTCoCcgfZGfOioSOleZVYhY5kCD2UFeca1izf7cVxmmRoS5BY8sGHOgy/Kb9Kc+xdpxynYPU/9k=","./public/images/menu/pizza/quattro-formaggio-pizza.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAALAA8DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABwID/8QAJBAAAgIBAwIHAAAAAAAAAAAAAQIDBQQABhESIRMyUVOBoeH/xAAUAQEAAAAAAAAAAAAAAAAAAAAF/8QAHBEAAQQDAQAAAAAAAAAAAAAAAQADERIEE6FB/9oADAMBAAIRAxEAPwBspt5YtsXWurLGVUPDEhFAPy2srrf9dUSeDnVlkk3tqiMSPXzcfeiAzTY2NM+PK8ZWeNB0sRwOn91eGgz1iXMLTB4SWDMe5D9jokPZGySRXqRLTNPZ4v/Z","./public/images/menu/pizza/red-chicken-curry-pizza.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAALAA8DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABwID/8QAJBAAAgEDAwMFAAAAAAAAAAAAAQMCAAQRBSExBhITFDJBQoH/xAAUAQEAAAAAAAAAAAAAAAAAAAAF/8QAHBEAAQQDAQAAAAAAAAAAAAAAAQACAwQREiFx/9oADAMBAAIRAxEAPwBotuubC4tvOixvSsyMR3CMc42J93AqdW6/0/TFKZcabfkMOAIRiTx8b4/KJIsYtDRCZiFOgIY+oMcnFaJHrwpN2ZNWUmRiZHGe/nagmzWzY64aedS5hriHODsv/9k=","./public/images/menu/pizza/the-farmers-market-pizza.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAALAA8DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABwID/8QAJBAAAgIBAwIHAAAAAAAAAAAAAQIDBBEABRIxUQYHEyFBQrH/xAAUAQEAAAAAAAAAAAAAAAAAAAAF/8QAGREBAAMBAQAAAAAAAAAAAAAAAQADEQQS/9oADAMBAAIRAxEAPwBkTx/tRpG2Kt5IORALKoyR1+37qL/mPs9NMtSvSYfg6oilgcA9+x0U+vNFTsRxyMEWVFC/GCuSMa0gUXRFDaLSo0JdgzH3bn10KX9DbinmLNHOVbjs/9k=","./public/images/menu/pizza/the-new-yorker-pizza.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAALAA8DASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAwf/xAAmEAACAQMDAQkAAAAAAAAAAAABAgMEBRIAESEUBgcVMkFRgaHh/8QAFAEBAAAAAAAAAAAAAAAAAAAABf/EABwRAAEEAwEAAAAAAAAAAAAAAAEAAxESBBOhIf/aAAwDAQACEQMRAD8AtFs7cUVxy6G2XKVVbEkIgAPy2juveFbLYQlXbLmshPEYjUkj382336akbTTU1NM8ErxlZ41XFtthj+6SjHiKxdazz5wktkx5Ifg6JD2RskkV6kS0zTybcX//2Q==","./public/images/menu/pizza/the-real-tuna-pizza.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAALAA8DASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAwf/xAAjEAACAQMDBAMAAAAAAAAAAAABAgMEBREAEjEGExQhUWFx/8QAFAEBAAAAAAAAAAAAAAAAAAAABf/EAB8RAAECBgMAAAAAAAAAAAAAAAEDEQACBBIU8CExUf/aAAwDAQACEQMRAD8Attt6xprjTmWgoKp1DlcSFU45PJ/NDeuvKGziPzLbW5kJAEW184+PYzz9akau8cE/bdk7UqKm0kYBXJ0kKiuMUdWWmV4CzbmPshxg6BlVrMhzMLPG5hcpU4Rdjdu9R//Z","./public/images/menu/pizza/white-chicken-curry-pizza.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAALAA8DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABwID/8QAIhAAAgIBBAEFAAAAAAAAAAAAAQIDBBEABRIxIQYHE0FR/8QAFQEBAQAAAAAAAAAAAAAAAAAABQb/xAAfEQABAwMFAAAAAAAAAAAAAAABAgMRAAQSExQhUZH/2gAMAwEAAhEDEQA/AGmp63pW63zVKNtlLlQrlUzjv7Os909wdu26GOSxt148yV4oFY5H55Ge9FEE00UMyxyugjmQIFbHEFcnVpncGiiuM0yGEsQWPYfwdTyXb/dGVp0+o59pcs2wZkA5V//Z","./public/images/menu/salad/default.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAKAA8DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABwMF/8QAJRAAAQQBAwMFAQAAAAAAAAAAAQIDBBEFABIhBgcxCBZBYXGB/8QAFAEBAAAAAAAAAAAAAAAAAAAABP/EACMRAAECAgsAAAAAAAAAAAAAAAECEQAxAwQTFCEiQVGhseH/2gAMAwEAAhEDEQA/AFTvBku4Hu+ViWX3o2ILaXYbkV0Nbq2qpZIKrtJFjgH451uenjM9d5aNPHVanHY7NJaW/tLgcJsptPmgeb58fmk7LwYU2PUyHHkhHKQ62F7T9WONXhRo8WOliKw0w0nwhtASkfwaAhFJeS6sJ+TharIVcEIzHV9n7fiP/9k=","./public/images/menu/side/default.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAALAA8DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABwAB/8QAJBAAAwACAQMDBQAAAAAAAAAAAQIDBBEABRIxBxMhFzJBUbH/xAAUAQEAAAAAAAAAAAAAAAAAAAAF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAQIAAwQREv/aAAwDAQACEQMRAD8AYPqP0VJJRsXqKToWCH2d77fu8E+OWV6k9GhjLkLhZ9pNQz2kxvYG/jZAPn+8K51ecqqBNlnVUQPNXCqyjuA2Drf5/fNxZzygmNWUxFptQzmgmpbuA7tLob18b4UMiwtqImhAvU//2Q==","./public/images/menu/wrap/default.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAKAA8DASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQGCP/EACUQAAECBAQHAAAAAAAAAAAAAAECEQAEBQYDByExEhQVIkFRkf/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAdEQACAQQDAAAAAAAAAAAAAAABAgADERIhQVGx/9oADAMBAAIRAxEAPwDWdwz9XkiOnUnnUlD8QWzK9Ebtts8I5a1W5qzbhnbroiKNPmYxEJl0kl8MHtVrqH1+P5imggFpMKhcuSDxq3kQuCmOIv3uf//Z","./public/images/slider/5.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAGAA8DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUG/8QAIBAAAgICAgIDAAAAAAAAAAAAAQIDBAARBRIGIVFhcf/EABUBAQEAAAAAAAAAAAAAAAAAAAUG/8QAHBEBAAIBBQAAAAAAAAAAAAAAAQACAwQFQbHR/9oADAMBAAIRAxEAPwC1T8gswTXeWqQRJassELuSwCH2Rr7IHveauvy9p7UdyxBEiRRr1VJHYnsutnsfz5xjAdryWsoyr1dQx2Tg8Op//9k=","./public/images/slider/slider-1.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAKAA8DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgQH/8QAIxAAAQMDBAIDAAAAAAAAAAAAAQIDBAURIQAGEjEHE0FRgf/EABUBAQEAAAAAAAAAAAAAAAAAAAUG/8QAHxEAAQMEAwEAAAAAAAAAAAAAAQIDEQAEE/AxUcHR/9oADAMBAAIRAxEAPwBZC23tejNteiiRlNrTibM5PKcHy4niQkpI6Cb3+9Uz9hUDchW29Sm2s4lQXHI6wOxe1xnro6zWNPnQvJ1SpcOZIjQAsKEVp1SGrk3J4A2v+aT+RK1WWZFMZZq09tpZPJCJCwlVkk5AOdTjtktK8odMcx5opNu6SU4y2J737X//2Q==","./public/images/slider/slider-2.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAKAA8DASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAABQYHCP/EACQQAAIBAwMDBQAAAAAAAAAAAAECAwQFEQAGIQcScRMxMkFR/8QAFQEBAQAAAAAAAAAAAAAAAAAABQb/xAAeEQACAQMFAAAAAAAAAAAAAAACAwEABPASIzFBgf/aAAwDAQACEQMRAD8AbIbtctp2uks9jnWkt6RB19FO8MzDJYAjIRvlxxk/Wi20d41l4EtHuG3pWxIAUMg7JF8suCPYedZj2ZcrjU1NZTVFfVTQRdgjikmZlQc8AE4Gqz0pVZ7+YZgJYgjEI4yoOPw6mTt3r3BbOe02Nwk40EuOM6r/2Q==","./public/images/slider/slider-3.jpg":"data:image/png;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAGAA8DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAMG/8QAIBAAAQQCAwADAAAAAAAAAAAAAQIDBBEABRIhMQZBUf/EABUBAQEAAAAAAAAAAAAAAAAAAAAE/8QAIREAAQMEAQUAAAAAAAAAAAAAAQIDMQAEBREhBiJBYaH/2gAMAwEAAhEDEQA/AM/q5Ds/YR4IdCG3Giskt2TxSOvfsZX5Ts4UCI/r4YlNSwlsur4NltRu6HVgflV5jGUX906nKIaCu0AHXsn7FOm8dbP4t11xG1EqG+d8I2IiTE+a/9k="}; export default compressedImages;