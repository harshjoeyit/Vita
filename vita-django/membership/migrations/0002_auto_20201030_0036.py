# Generated by Django 3.1.1 on 2020-10-30 00:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('membership', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='membership',
            old_name='membership_type',
            new_name='memebership_type',
        ),
        migrations.AlterField(
            model_name='usermembership',
            name='membership',
            field=models.ForeignKey(default=1, null=True, on_delete=django.db.models.deletion.SET_NULL, to='membership.membership'),
        ),
    ]
