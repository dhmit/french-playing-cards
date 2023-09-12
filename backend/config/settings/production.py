"""

Production settings for *****

"""

from .base import *  # pylint: disable=unused-wildcard-import, wildcard-import

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

SECRET_KEY = "qqucn931x78rx054n(6g(s_3vxppjw$f24e(9&v6rsbd0&0$2e"

# ADMINS = ['rahmed@mit.edu']  # Django will email Ryaan on internal server errors

ALLOWED_HOSTS = ["45.55.60.82", "frenchplayingcards.mit.edu"]

CORS_ORIGIN_WHITELIST = ["http://45.55.60.82", "http://frenchplayingcards.mit.edu", "https://frenchplayingcards.mit.edu"]
