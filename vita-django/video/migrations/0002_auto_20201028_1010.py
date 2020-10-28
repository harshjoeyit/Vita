# Generated by Django 3.1.1 on 2020-10-28 10:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('membership', '0001_initial'),
        ('video', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='video',
            name='allowed_membership',
            field=models.ManyToManyField(to='membership.Membership'),
        ),
        migrations.AddField(
            model_name='video',
            name='playtime',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='video',
            name='views',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='videocategory',
            name='image',
            field=models.ImageField(null=True, upload_to='categoryImg/'),
        ),
        migrations.AlterField(
            model_name='commentvote',
            name='voteValue',
            field=models.CharField(choices=[('none', 'none'), ('like', 'like'), ('dislike', 'dislike')], default='none', max_length=10),
        ),
        migrations.AlterField(
            model_name='videovote',
            name='voteValue',
            field=models.CharField(choices=[('none', 'none'), ('like', 'like'), ('dislike', 'dislike')], default='none', max_length=10),
        ),
    ]