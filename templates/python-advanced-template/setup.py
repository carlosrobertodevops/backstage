from setuptools import setup, find_packages

setup(
    name="{{ name }}",
    version="0.1.0",
    description="{{ description }}",
    author="Your Name",
    packages=find_packages(),
    install_requires=["flask"],
)
